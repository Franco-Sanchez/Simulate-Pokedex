import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { PokemonName } from "./UI/texts";
import  { DataContainer, StatBox, TypesContainer, ImageContainer } from '../components/UI/containers';
import colors from '../components/UI/colors';
import Type from './card/Type';
import { StatText } from './UI/texts';
import Stat from './card/Stat';
import { useState } from "react";

function Card({ pokemon }) {
  const history = useHistory();
  const [large, setLarge] = useState(false)

  const goToPokemonProfile = (name) => history.push(`/pokemon/${name}`)
  
  return (
    <StyledCard 
      onClick={() => goToPokemonProfile(pokemon.name)}
      onMouseOver={()=> setLarge(true)}
      onMouseOut={() => setLarge(false)}
    >
      <DataContainer>
        <PokemonName>{pokemon.name}</PokemonName>
        <StatBox profile={false}>
          <Stat stat={pokemon.base_experience} />
          <StatText>Experience</StatText>
        </StatBox>
        <TypesContainer profile={false}>
          {pokemon.types.map((objType, index) => <Type key={index} name={objType.type.name} />)}
        </TypesContainer>
      </DataContainer>
      <ImageContainer profile={false}>
        <img className={large ? 'large': ''} src={pokemon.sprites.front_default} alt={pokemon.name} />
      </ImageContainer>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 100%;
  min-height: 135px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 2px 15px 18px -20px rgba(0,0,0,0.75);

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export default Card;