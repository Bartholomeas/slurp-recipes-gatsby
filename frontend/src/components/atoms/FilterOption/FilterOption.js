import React from "react"
import styled from "styled-components"

const FilterOptionText = styled.input`
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionLabel = styled.label`
  font-size: 1.6rem;
  text-wrap: nowrap;
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionWrapper = styled.div`
  margin-bottom: 0.8rem;
`

export const FilterOption = ({ name, option = "", id }) => {
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
