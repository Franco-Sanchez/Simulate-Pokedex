import styled from "@emotion/styled";

export const PokemonName = styled.h3`
  font-family: 'Karla';
  max-width: 160px;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`

export const ExperienceText = styled.p`
  font-family: 'Karla';
  font-size: 12px;
  line-height: 14px;
`

export const ExperienceQuantity = styled(ExperienceText)`
  font-size: 15px;
  line-height: 18px;
`