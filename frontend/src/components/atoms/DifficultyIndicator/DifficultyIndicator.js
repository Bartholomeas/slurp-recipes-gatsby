import React from "react"
import styled from "styled-components"

export const DifficultyWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.8rem;
  width: 10rem;
  transform: translateY(-100%);
  background-color: ${({ difficulty, theme }) => {
    if (difficulty === "łatwe") {
      return theme.colors.accent
    } else if (difficulty === "średnie") {
      return theme.colors.gold
    } else {
      return theme.colors.darkBase
    }
  }};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
  & p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.standard};
  }
`

const DifficultyIndicator = ({ difficulty = "łatwe" }) => {
  return (
    <DifficultyWrapper difficulty={difficulty}>
      <p data-testid={"difficulty-text"}> {difficulty}</p>
    </DifficultyWrapper>
  )
}

export default DifficultyIndicator
