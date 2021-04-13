import styled from '@emotion/styled';
import colors from '../UI/colors';

function Type({name}) {
  return <StyledType>{name}</StyledType>
}

const StyledType = styled.li`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 14px;
  border-radius: 10px;
  text-transform: capitalize;
  padding: 4px 10px;
  background-color: ${colors.skyblue};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
`

export default Type;