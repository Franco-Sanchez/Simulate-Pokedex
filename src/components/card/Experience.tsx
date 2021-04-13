import styled from "@emotion/styled";
import { ExperienceQuantity } from "../UI/texts";

function Experience({ experience }) {
  return (
    <StyledExperience>
      <ExperienceQuantity>{experience}</ExperienceQuantity>
    </StyledExperience>
  )
}

const StyledExperience = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-radius: 50%;
`

export default Experience;