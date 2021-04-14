import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import {  
  ImageContainer, 
  TypesContainer, 
  ProfileContainer,
  DataProfileContainer,
  StatsContainer,
  AbilitiesContainer,
  MovesContainer
} from "../components/UI/containers";
import Type from "../components/card/Type";
import { PokemonProfile, CardTitle, CardParagraph } from "../components/UI/texts";
import MovesPagination from "../components/MovesPagination";
import StatsPokemon from "../components/showPokemon/StatsPokemon";

function Pokemon() {
  const pokemonRes: any = null;
  const [pokemon, setPokemon] = useState(pokemonRes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { name } = useParams<{ name?: string }>();

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      setPokemon(response.data);
    };
    getPokemon();
  }, [name]);

  const renderAbilities = (abilities) => {
   const arrAbilities = abilities.map(objAbility => objAbility.ability.name)
   return arrAbilities.join(' - ')
  }

  return (
    <PokemonSection>
      <ProfileContainer>
        <PokemonProfile>{pokemon && pokemon.name}</PokemonProfile>
        <ImageContainer profile={true}>
          {pokemon && (
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              width="100%"
              height="100%"
            />
          )}
          <TypesContainer profile={true}>
            {pokemon && pokemon.types.map((objType, index) => <Type key={index} name={objType.type.name} />)}
          </TypesContainer>
        </ImageContainer>
        <DataProfileContainer>
          <AbilitiesContainer>
            <CardTitle>Abilities</CardTitle>
            {pokemon && <CardParagraph>{renderAbilities(pokemon.abilities)}</CardParagraph>}
          </AbilitiesContainer>
          <MovesContainer>
            {pokemon && <CardTitle>Moves ({pokemon.moves.length})</CardTitle>}
            {pokemon && <MovesPagination pokemon={pokemon} />}
          </MovesContainer>
          <StatsContainer>
            {pokemon && <StatsPokemon stats={pokemon.stats}/>}
          </StatsContainer>
        </DataProfileContainer>
      </ProfileContainer>
    </PokemonSection>
  );
}

const PokemonSection = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default Pokemon;
