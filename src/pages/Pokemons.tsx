import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const history = useHistory()

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const pokemonPromises = response.data.results.map(async (pokemon) => await axios.get(pokemon.url))
      const pokemonsRes: any = await Promise.all(pokemonPromises)
      setPokemons(pokemonsRes)
    }
    getPokemons();
  }, [offset])

  const handlePreviousPagination = () => setOffset(offset - 20);
  
  const handleNextPagination = () => setOffset(offset + 20);

  const goToPokemonProfile = (name) => history.push(`/pokemon/${name}`)
  
  // const changeImage = (e, pokemon) => e.target.src = pokemon.data.sprites.front_default

  return (
    <>
      <ul>
        {pokemons.map((pokemon: any) => (
          <div>
            <img 
              // onMouseOver={(e) => changeImage(e, pokemon)}
              src={pokemon.data.sprites.front_default}
              alt={pokemon.data.name} />
            <li onClick={() => goToPokemonProfile(pokemon.data.name)}>{pokemon.data.name}</li>
          </div>
        ))}
      </ul>
      {offset > 0 && <button onClick={handlePreviousPagination}>Previous</button> }
      {offset < 1100 && <button onClick={handleNextPagination}>Next</button> }
    </>
  )
}

export default Pokemons;