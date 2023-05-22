import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { PokemonCard } from "./PokemonCard"
import { PokemonsContainer, RemoveButton, ContainerButton, LoadMoreButton } from "../assets/styled/PokemonListStyled"  

export const PokemonList = () => {
    const {  loadMorePokemons, selectedPokemons, handleRemoveSelected, handleRemovePokemon, visiblePokemons } = useContext(PokemonContext)
  
    return (
      <PokemonsContainer>
        {visiblePokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} handleRemovePokemon={handleRemovePokemon} />
        ))}
        {selectedPokemons.length > 0 && <RemoveButton onClick={handleRemoveSelected}>Remove selected</RemoveButton>}
        <ContainerButton>
          {<LoadMoreButton onClick={loadMorePokemons}>Load More</LoadMoreButton>}
        </ContainerButton>
      </PokemonsContainer>
    )
  }
  