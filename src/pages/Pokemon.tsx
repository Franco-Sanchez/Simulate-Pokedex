import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const pokemonRes : any = null

  const [pokemon, setPokemon] = useState(pokemonRes) 
  const { name } = useParams<{ name?: string }>();
  
  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      setPokemon(response.data)
    }
    getPokemon();
  }, [name])

  return (
    <div>
      {name}
      {pokemon && <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/> }
    </div>
  )
}

export default Pokemon;