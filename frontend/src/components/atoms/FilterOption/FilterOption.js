import React, { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../../../context/StateContext"

const FilterOptionWrapper = styled.div`
  margin-bottom: 0.8rem;
`
const FilterOptionText = styled.input`
  color: ${({ theme }) => theme.colors.fontColor};
`
const FilterOptionLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  margin: 0 0.8rem;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const FilterOption = ({ name, option = "", id }) => {
  const { info, setInfo } = useContext(StateContext)

  const getSpecificRecipes = input => {
    setInfo({ ...info, [input.target.name]: option[0] })
  }

  return (
    <FilterOptionWrapper>
      <FilterOptionText
        isChecker={false}
        onClick={e => getSpecificRecipes(e)}
        name={name}
        type="checkbox"
        id={`${option}-${id}`}
      ></FilterOptionText>
      <FilterOptionLabel htmlFor={`${option}-${id}`}>
        {option}
      </FilterOptionLabel>
    </FilterOptionWrapper>
  )
}
