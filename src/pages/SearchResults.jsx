import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Search } from "../components/Search"
import axios from "axios"
import { PokemonCard } from "../components/PokemonCard"
import { PokemonsContainer } from "../assets/styled/PokemonListStyled"
import { Body, H2 } from "../assets/styled/SearchResultStyled"

export const SearchResults = () => {
  const [resultSearch, setResultSearch] = useState([])
  const searchValue = useParams()

  useEffect(() => {
    const fetchFilteredPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
        const allPokemons = response.data.results

        const filteredPokemons = allPokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchValue.searchValue.toLowerCase())
        )

        const pokemonURL = filteredPokemons.map(async pokemon => {
          const result = await axios.get(pokemon.url)
          return result.data
        })

        const results = await Promise.all(pokemonURL)
        setResultSearch(results)
      } catch (error) {
        console.log(error)
      }
    }

    fetchFilteredPokemons()
  }, [searchValue.searchValue])

  return (
    <Body>
      <Search />
      <H2>{resultSearch.length} Results for {searchValue.searchValue}</H2>
      <PokemonsContainer>
        {resultSearch.length > 0 ? (
          <>
            {resultSearch.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
          </>
        ) : (
          <span></span>
        )}
      </PokemonsContainer>
    </Body>
  )
}
