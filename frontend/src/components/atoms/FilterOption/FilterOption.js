import React from "react"
import styled from "styled-components"

const FilterOptionText = styled.input`
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionLabel = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionWrapper = styled.div`
  margin-bottom: 0.8rem;
`

export const FilterOption = ({ name, option = "", id }) => {
  const getSpecificRecipes = async () => {
    console.log(name)
    await fetch(`http://localhost:1337/${name}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <FilterOptionWrapper>
      <FilterOptionText
        onClick={getSpecificRecipes}
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
