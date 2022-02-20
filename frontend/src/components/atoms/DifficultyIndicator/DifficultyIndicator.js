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

const DifficultyIndicator = () => {
  return (
    <DifficultyWrapper>
      <DifficultyLevel isFilled={true}></DifficultyLevel>
      <DifficultyLevel isFilled={true}></DifficultyLevel>
      <DifficultyLevel isFilled={false}></DifficultyLevel>
    </DifficultyWrapper>
  )
}

export default DifficultyIndicator
