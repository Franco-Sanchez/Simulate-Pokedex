import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { PokemonsContainer, PokemonsSection } from '../components/UI/containers';
import { AiFillCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`);
      const pokemonPromises = response.data.results.map(async (pokemon) => await axios.get(pokemon.url))
      const pokemonsRes: any = await Promise.all(pokemonPromises)
      setPokemons(pokemonsRes)
    }
    getPokemons();
  }, [offset])

  const handlePreviousPagination = () => setOffset(offset - 9);
  
  const handleNextPagination = () => setOffset(offset + 9);

  return (
    <>
      <PokemonsSection>
        <PokemonsContainer>
          {pokemons.map((pokemon: any) => <Card key={pokemon.data.name} pokemon={pokemon.data} /> )}
        </PokemonsContainer>
          <IconsContainer>
            {offset > 0 && <AiFillCaretLeft onClick={handlePreviousPagination} /> }
            {offset < 1116 && <AiOutlineCaretRight onClick={handleNextPagination} /> }
          </IconsContainer>
      </PokemonsSection>
    </>
  )
}

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    cursor: pointer;
    font-size: 20px;
  }
`

export default Pokemons;