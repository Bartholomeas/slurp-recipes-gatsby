import React from "react"
import SearchBar from "../../molecules/SearchBar/SearchBar"
import styled from "styled-components"

const FilterWrapper = styled.div`
  grid-column:0/1
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  `
const FilterHeader = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 3rem;
  font-weight: bold;
`

const FilterContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`

const FilterBar = () => {
  return (
    <FilterWrapper>
      <FilterHeader>filters</FilterHeader>
      <FilterContainer>
        <SearchBar />
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
