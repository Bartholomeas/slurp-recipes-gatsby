import React from "react"
import styled from "styled-components"

const FilterOptionText = styled.input``
const FilterOptionLabel = styled.label``
const FilterOptionWrapper = styled.div``

export const FilterOption = ({ option = "medium" }) => {
  return (
    <FilterOptionWrapper>
      <FilterOptionText type="checkbox"></FilterOptionText>
      <FilterOptionLabel>{option}</FilterOptionLabel>
    </FilterOptionWrapper>
  )
}
    