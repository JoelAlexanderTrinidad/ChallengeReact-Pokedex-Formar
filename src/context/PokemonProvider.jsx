import {  useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import axios from "axios"
// import { useForm } from "../hooks/useForm"
import PropTypes from 'prop-types'

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemons, setSelectedPokemons] = useState([])
  const [visiblePokemons, setVisiblePokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const handlePokemonSelect = (selectedPokemonArr) => {
    setSelectedPokemons(selectedPokemonArr)
  }

  const handleRemovePokemon = (pokemon) => {
    setVisiblePokemons(visiblePokemons.filter((p) => p !== pokemon))
  }

  const handleRemoveSelected = () => {
    const updatedVisiblePokemons = visiblePokemons.filter(
      (pokemon) => !selectedPokemons.includes(pokemon)
    )
    setVisiblePokemons(updatedVisiblePokemons)
    setSelectedPokemons([])
  }

  const fetchPokemons = async (page) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${(page - 1) * 12}`
      )
      const pokemonURL = response.data.results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url)
        return res.data
      })
      const results = await Promise.all(pokemonURL)
      setPokemons([...pokemons, ...results])
      setVisiblePokemons([...visiblePokemons, ...results])
      setTotalPages(Math.ceil(response.data.count / 12))
    } catch (error) {
      console.log(error)
    }
  }

  const loadMorePokemons = () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    fetchPokemons(nextPage)
  }

  useEffect(() => {
    fetchPokemons(currentPage)
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        selectedPokemons,
        handlePokemonSelect,
        visiblePokemons,
        loadMorePokemons,
        handleRemoveSelected,
        handleRemovePokemon,
        totalPages,
        currentPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}



PokemonProvider.propTypes = {
    children: PropTypes.element.isRequired
  }