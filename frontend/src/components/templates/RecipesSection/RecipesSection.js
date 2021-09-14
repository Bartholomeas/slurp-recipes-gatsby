import React from "react"
import Header from "../../atoms/Header/Header"
import FilterBar from "../../organisms/FilterBar/FilterBar"
import {
  RecipesContainer,
  RecipesWrapper,
  FiltersButton,
  CardsContainer
} from "./RecipesSection.styles"

const RecipesSection = () => {
  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton content="filters" />
      <RecipesContainer>
        <FilterBar />
        <CardsContainer></CardsContainer>
      </RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
