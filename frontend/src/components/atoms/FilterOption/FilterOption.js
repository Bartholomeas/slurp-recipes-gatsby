import React, { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../../../context/StateContext"

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
  const { info, setInfo } = useContext(StateContext)
  // console.log(option)

  return (
    <FilterOptionWrapper>
      <FilterOptionText
        // onClick={e => getSpecificRecipes(e)}
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
