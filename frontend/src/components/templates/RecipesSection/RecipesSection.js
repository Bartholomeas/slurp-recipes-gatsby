import React from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/Button"
import Header from "../../atoms/Header/Header"
import SearchBar from "../../molecules/SearchBar/SearchBar"
import FilterBar from "../../organisms/FilterBar/FilterBar"

export const RecipesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 6rem;
`
export const RecipesContainer = styled.div``

const FiltersButton = styled(Button)`
  font-size: 5rem;
  color: red;
`

const RecipesSection = () => {
  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton content="filters" />
      <SearchBar />
      <RecipesContainer></RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
