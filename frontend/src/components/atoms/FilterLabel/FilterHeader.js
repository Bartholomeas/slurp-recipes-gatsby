import React from "react"
import styled from "styled-components"

const FilterOptionHeaderText = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.baseColor};
`

export const FilterOptionHeader = ({ content }) => {
  return (
    <FilterOptionHeaderText htmlFor="difficulty">
      {content}
    </FilterOptionHeaderText>
  )
}
