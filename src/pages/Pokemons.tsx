import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { PokemonsContainer, IconsContainer } from "../components/UI/containers";
import { AiFillCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import styled from "@emotion/styled";
import { MessageError } from "../components/UI/texts";
import Loading from "../components/UI/Loading";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getPokemons = async () => {
      setError(false)
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`
        );
        const pokemonPromises = response.data.results.map(
          async (pokemon) => await axios.get(pokemon.url)
        );
        const pokemonsRes: any = await Promise.all(pokemonPromises);
        setPokemons(pokemonsRes);
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    };
    getPokemons();
  }, [offset]);

  const handlePreviousPagination = () => setOffset(offset - 9);

  const handleNextPagination = () => setOffset(offset + 9);

  return (
    <PokemonsSection className={loading || error ? 'action' : ''}>
      {loading && <Loading />}
      {error && <MessageError>An error ocurred!</MessageError>}
      {!loading && !error && (
        <>
          <PokemonsContainer>
            {pokemons.map((pokemon: any) => (
              <Card key={pokemon.data.name} pokemon={pokemon.data} />
            ))}
          </PokemonsContainer>
          <IconsContainer>
            {offset > 0 && (
              <AiFillCaretLeft onClick={handlePreviousPagination} />
            )}
            {offset < 1116 && (
              <AiOutlineCaretRight onClick={handleNextPagination} />
            )}
          </IconsContainer>
        </>
      )}
    </PokemonsSection>
  );
}

const PokemonsSection = styled.section`
  padding: 30px 10%;
  
  &.action {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export default Pokemons;
