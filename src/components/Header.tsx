import styled from "@emotion/styled";
import colors from "./UI/colors";

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>
}

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  background-color: ${colors.yellow};
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
`

export default Header;