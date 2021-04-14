import styled from "@emotion/styled";
import { LiProps } from '../app/types';
import colors from "./UI/colors";

function Pagination({ limit, total, page, onSelectPage}) {
  const pages = Math.ceil(total / limit);
  const listItems : any = [];

  for (let i = 1; i <= pages; i++) {
    listItems.push(<StyledLi key={i} selector={i} data={page} onClick={() => onSelectPage(i)} />)
  }

  return <StyledUl>{listItems}</StyledUl>
}

const StyledUl = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
` 

const StyledLi = styled.li<LiProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.selector === props.data ? `${colors.red}` : 'black'};
  cursor: pointer;
`

export default Pagination;