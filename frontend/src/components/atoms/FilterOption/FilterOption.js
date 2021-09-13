import React from "react"
import styled from "styled-components"

const FilterOptionText = styled.input`
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionLabel = styled.label`
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionWrapper = styled.div``

export const FilterOption = ({ name, option = "", id }) => {
  console.log(option)
  return (
    <FilterOptionWrapper>
      <FilterOptionText
        name={name}
        type="radio"
        id={`${option}-${id}`}
      ></FilterOptionText>
      <FilterOptionLabel htmlFor={`${option}-${id}`}>
        {option}
      </FilterOptionLabel>
    </FilterOptionWrapper>
  )
}
