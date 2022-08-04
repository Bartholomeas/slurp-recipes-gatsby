import React, { useEffect, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { recipesActions } from "../../../store/recipesSlice"
import { uiActions } from "../../../store/uiSlice"
import Card from "../../organisms/Card/Card"
import FilterBar from "../../organisms/FilterBar/FilterBar"
import {
  TopContainer,
  SearchbarContainer,
  RecipesWrapper,
  FiltersButton,
  CardsContainer,
} from "./RecipesSection.styles"
import { BsFilterCircleFill } from "react-icons/bs"
import SearchBar from "../../molecules/SearchBar/SearchBar"

const RecipesSection = () => {
  const data = useStaticQuery(graphql`
    query GetRecipes {
      allStrapiRecipes {
        nodes {
          id
          rating
          difficulties {
            difficulties
          }
          diets {
            diets
          }
          types {
            types
          }
          title
          time
          img {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `)

  const { recipes, filteredRecipes } = useSelector(state => state.recipes)
  const { filterbarStatus, filterBtnStatus } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(recipesActions.setRecipes(data.allStrapiRecipes.nodes))
  }, [data, dispatch])

  const filterBarHandler = () => {
    dispatch(uiActions.toggleFilterbar())
  }

  const checkScrollPosition = useCallback(() => {
    const recipesSectionPosition = document.querySelector("#recipes").offsetTop
    dispatch(uiActions.toggleFilterBtn(false))
    if (window.scrollY + window.innerHeight - 150 > recipesSectionPosition)
      dispatch(uiActions.toggleFilterBtn(true))
  }, [dispatch])
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition)
    return () => {
      window.removeEventListener("scroll", checkScrollPosition)
    }
  }, [checkScrollPosition, dispatch])

  return (
    <RecipesWrapper id="recipes">
      <FilterBar isOpen={filterbarStatus} />
      <TopContainer>
        <SearchbarContainer>
          <h2>Przepisy</h2>
          <SearchBar />
        </SearchbarContainer>
      </TopContainer>
      <CardsContainer>
        <FiltersButton isActive={filterBtnStatus} aria-label="filter button">
          <BsFilterCircleFill onClick={filterBarHandler} />
        </FiltersButton>
        {filteredRecipes.length > 0
          ? filteredRecipes.map(recipe => {
              return <Card key={recipe.id} payload={recipe} />
            })
          : recipes.map(recipe => {
              return <Card key={recipe.id} payload={recipe} />
            })}
      </CardsContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
