import React from "react"
import styled from "styled-components"
import { theme } from "../../../styles/theme"

export const DifficultyWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`
export const DifficultyLevel = styled.span`
  width: 2rem;
  height: 2rem;
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.darkerBase};
  border-radius: 50%;
  background-color: ${({ isFilled }) =>
    isFilled ? theme.colors.darkerBase : "none"};
`

const DifficultyIndicator = ({ difficulty }) => {
  // console.log(difficulty)

  difficulty === "easy"
    ? (difficulty = 1)
    : difficulty === "medium"
    ? (difficulty = 2)
    : (difficulty = 3)
  console.log(difficulty)

  return (
    <DifficultyWrapper>
      <DifficultyLevel
        isFilled={difficulty >= 1 ? true : false}
      ></DifficultyLevel>
      <DifficultyLevel
        isFilled={difficulty >= 2 ? true : false}
      ></DifficultyLevel>
      <DifficultyLevel
        isFilled={difficulty === 3 ? true : false}
      ></DifficultyLevel>
    </DifficultyWrapper>
  )
}

export default DifficultyIndicator
