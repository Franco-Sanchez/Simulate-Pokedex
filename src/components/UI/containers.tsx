import styled from '@emotion/styled';
import colors from './colors';
import { ImageContainerProps, TypeContainerProps, StatBoxProps } from '../../app/types';

export const PokemonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 10px 25px;
  position: absolute;
  left: 0;
  height: 100%;
  z-index: 10;
  gap: 5px;

  @media screen and (max-width: 500px) {
    position: relative;
    padding-left: 0;
    align-items: center
  }
`

export const StatBox = styled.div<StatBoxProps>`
  width: ${props => props.profile ? '60px' : 'min-content'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: ${colors.white};
  padding: ${props => props.profile ? '5px 0' : ''};
  border-radius: ${props =>props.profile ? '10px' : ''};
`

export const TypesContainer = styled.ul<TypeContainerProps>`
  display: flex;
  gap: 12px;
  position: ${props => props.profile ? 'absolute' : ''};
  bottom: ${props => props.profile ? '10px' : ''};
  right: ${props => props.profile ? '10px' : ''};
`

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.greenLight};
  border-radius: ${props => props.profile ? '0px 0px 0px 8px' : '0px 8px 8px 0px'};
  min-width: 200px;
  right: 0;
  height: ${props => props.profile ? '370px' : '100%'};
  position: ${props => props.profile ? 'relative' : 'absolute'};
  padding: ${props => props.profile ? '20px' : ''};

  & img {
    transition: all ease 0.5s;
  }

  & .large {
    transform: scale(1.2);
  }

  @media screen and (max-width: 500px) {
    position: relative;
    border-radius: 0px 0px 8px 8px;
  }
`

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    cursor: pointer;
    font-size: 20px;
  }
`

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`

export const DataProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(180deg, #926762bf 42.19%, #d6b8b6 100%);
  padding: 10px;
  gap: 15px;
  border-radius: 0 0 8px 0;
`

export const StatsContainer = styled.div`
  display:flex;
  justify-content: center;
  gap: 5px;

  @media screen and (max-width: 485px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`

export const AbilitiesContainer = styled.div`
  max-width: 220px;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 8px 20px;
`

export const MovesContainer = styled.div`
  background-color: ${colors.white};
  padding: 8px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 114px;
  
  @media screen and (max-width: 385px) {
    height: auto;
  }
`