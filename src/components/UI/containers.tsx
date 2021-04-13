import styled from '@emotion/styled';
import colors from './colors';

export const PokemonsSection = styled.section`
  padding: 30px 10%;
`

export const PokemonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 10px 25px;
  position: absolute;
  left: 0;
  height: 100%;
  z-index: 10;
  gap: 5px;
`

export const ExperienceContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`

export const TypesContainer = styled.ul`
  display: flex;
  gap: 12px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.greenLight};
  border-radius: 0px 8px 8px 0px;
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 200px;
  
  & img {
    transition: all ease 0.5s;
  }

  & .large {
    transform: scale(1.2);
  }
`