import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { recipesActions } from "../../../store/recipesSlice"
import {SearchWrapper,
    SearchLabel,
    SearchArea,
    ResultsWrapper,
    ResultsTitle,
    ResultsContainer
} from "./SearchBar.styles.js"
import FoundRecipe from "../FoundRecipe/FoundRecipe"
import { TbSearch } from "react-icons/tb"


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const { searchedRecipes, recipes } = useSelector(state => state.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredRecipes = recipes.filter(recipe => {
        if (searchValue !== "") {
          if (recipe.title.toLowerCase().includes(searchValue)) return recipe
        }
        return
      })

      dispatch(recipesActions.setSearchedRecipes(filteredRecipes))
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [searchValue, dispatch, recipes])

  return (
    <SearchWrapper data-testid={"searchbar-body"}>
      <SearchLabel htmlFor="search-bar">Znajdź przepis</SearchLabel>
      <TbSearch />
      <SearchArea
        onBlur={e => {
          e.target.value = ""
          setSearchValue("")
        }}
        onChange={e => {
          setSearchValue(e.target.value.toLowerCase())
        }}
        placeholder="Znajdź przepis.."
        name="search-bar"
        id="search-bar"
      />
      {searchedRecipes.length > 0 ? (
        <ResultsWrapper>
          <ResultsTitle>Sugestie przepisów </ResultsTitle>
          <ResultsContainer data-testid={"results-container"}>
            {searchedRecipes.map(recipe => {
              return <FoundRecipe title={recipe.title} key={recipe.id} />
            })}
          </ResultsContainer>
        </ResultsWrapper>
      ) : null}
    </SearchWrapper>
  )
}

export default SearchBar
