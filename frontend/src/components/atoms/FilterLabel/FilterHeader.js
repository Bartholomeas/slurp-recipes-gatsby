import React from "react"
import styled from "styled-components"

const FilterOptionHeaderText = styled.p`
  font-weight: bold;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.baseColor};
`

export const FilterOptionHeader = ({ content }) => {
  return <FilterOptionHeaderText>{content}</FilterOptionHeaderText>
}
