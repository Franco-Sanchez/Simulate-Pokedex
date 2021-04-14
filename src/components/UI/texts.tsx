import styled from "@emotion/styled";
import colors from "./colors";

export const PokemonProfile = styled.h2`
  font-family: 'Karla';
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 10px;
  background-color: ${colors.red};
  color : ${colors.white};
  grid-column: span 2;
  padding: 5px 0;
  border-radius: 8px 8px 0 0;

  @media screen and (max-width: 630px) {
    grid-column: 1;
  }
`

export const PokemonName = styled.h3`
  font-family: 'Karla';
  max-width: 160px;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);

  @media screen and (max-width: 844px) {
    max-width: max-content;
  }
`
export const StatText = styled.p`
  font-family: 'Karla';
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`

export const StatQuantity = styled(StatText)`
  font-size: 15px;
  line-height: 18px;
`

export const CardTitle = styled.p`
  font-family: 'Karla';
  line-height: 18px;
  font-weight: bold;
`

export const CardParagraph = styled.p`
  font-family: sans-serif;
  line-height: 20px;
`

export const MoveText = CardParagraph.withComponent('li');