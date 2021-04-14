import styled from "@emotion/styled";
import { StatQuantity } from "../UI/texts";

function Stat({ stat }) {
  return (
    <StyledStat>
      <StatQuantity>{stat}</StatQuantity>
    </StyledStat>
  )
}

const StyledStat = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-radius: 50%;
`

export default Stat;