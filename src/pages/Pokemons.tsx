import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function Pokemons () {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const history = useHistory()

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      setData(response.data.results)
    }
    getPokemons();
  }, [offset])

  const handlePreviousPagination = () => setOffset(offset - 20);
  
  const handleNextPagination = () => setOffset(offset + 20);

  const goToPokemonProfile = (name) => history.push(`/pokemon/${name}`)

  return (
    <div>
      {data.map((pokemon: any) => (
      <ul>
        <li onClick={() => goToPokemonProfile(pokemon.name)}>{pokemon.name}</li>
      </ul>))}
      {offset > 0 && <button onClick={handlePreviousPagination}>Previous</button> }
      {offset < 1100 && <button onClick={handleNextPagination}>Next</button> }
    </div>
  )
}

export default Pokemons;