import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { Card, ContainerInfo, CardChild, Button, Div, Name } from "../assets/styled/PokemonCardStyled";


export const PokemonCard = ({ pokemon, handleRemovePokemon }) => {
    const showButton = !!handleRemovePokemon;

  const { handlePokemonSelect, selectedPokemons} = useContext(PokemonContext)

  const isSelected = selectedPokemons.includes(pokemon)

  const handleSelectPokemon = () => {
    if (isSelected) {
      handlePokemonSelect(selectedPokemons.filter(p => p !== pokemon))
    } else {
      handlePokemonSelect([...selectedPokemons, pokemon])
    }
  }
  
    return(
        <Card>
          <CardChild className={`pokemon-card ${isSelected ? 'selected' : ''}`}>
            <div>
              <img src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.back_default || pokemon.sprites.front_default } alt={pokemon.name} />
            </div>
            <Div>

            </Div>
            
            <ContainerInfo>
              <Name>{pokemon.name}</Name>
              <span>Weight:  <span>{pokemon.weight}</span></span>
                <ul>Abilities: </ul>
                {pokemon.abilities.map(ability => (
                  <li key={ability.ability.name}>- {ability.ability.name}</li>
                ))}
            </ContainerInfo>

            {showButton && (
              <Button onClick={handleSelectPokemon}>
                {isSelected ? 'DESELECT' : 'select'}
              </Button>
            )}
           
          </CardChild>
        </Card>
    )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        ability: PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        dream_world: PropTypes.shape({
          front_default: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
      back_default: PropTypes.string.isRequired,
      front_default: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  handleRemovePokemon: PropTypes.func
};