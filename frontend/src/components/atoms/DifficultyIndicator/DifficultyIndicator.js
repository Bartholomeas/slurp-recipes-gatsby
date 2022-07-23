import React from "react"
import styled from "styled-components"
import { theme } from "../../../styles/theme"

export const DifficultyWrapper = styled.div`
  display: flex;
`
export const DifficultyLevel = styled.span``

const DifficultyIndicator = ({ difficulty = "" }) => {
  return (
    <DifficultyWrapper>
      <p> {difficulty}</p>

      {/* <DifficultyLevel
        isFilled={difficulty >= 1 ? true : false}
      ></DifficultyLevel>
      <DifficultyLevel
        isFilled={difficulty >= 2 ? true : false}
      ></DifficultyLevel>
      <DifficultyLevel
        isFilled={difficulty === 3 ? true : false}
      ></DifficultyLevel> */}
    </DifficultyWrapper>
  )
}

export default DifficultyIndicator
