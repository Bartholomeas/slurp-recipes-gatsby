import React, { useState, useContext, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
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
import { StateContext } from "../../../context/StateContext"
import SearchBar from "../../molecules/SearchBar/SearchBar"

const RecipesSection = () => {
  const data = useStaticQuery(graphql`
    query GetRecipes {
      allStrapiRecipes {
        nodes {
          id
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

  // const { recipes } = useSelector(state => state.recipes)
  console.log(recipes)
  const dispatch = useDispatch()
  // console.log(...data.allStrapiRecipes.nodes)
  const [recipes] = useState(data.allStrapiRecipes.nodes)
  const [isOpen, setIsOpen] = useState(false)
  const { searchedRecipes, setSearchedRecipes } = useContext(StateContext)
  const [isActive, setIsActive] = useState(false)
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const {
    info,
    info: { diets, difficulties, types },
  } = useContext(StateContext)
  let checkedInfos = []

  const filterBarHandler = () => {
    setIsOpen(!isOpen)
  }

  const clearFiltering = () => {
    checkedInfos = []
    setFilteredRecipes([])
  }

  const checkRecipeTruthy = (recipe, idx) => {
    const infoKey = checkedInfos[idx - 1]

    return recipe[infoKey][0][infoKey] === info[infoKey]
  }

  useEffect(() => {
    if (info.diets || info.difficulties || info.types) {
      for (const key in info) {
        if (info[key] !== "") {
          checkedInfos.push(key)
        }
      }

      if (checkedInfos.length === 1) {
        recipes.forEach(recipe => {
          if (
            recipe[checkedInfos[0]][0][checkedInfos[0]] ===
            info[checkedInfos[0]]
          ) {
            setFilteredRecipes(filteredRecipes => [...filteredRecipes, recipe])
            setSearchedRecipes(searchedRecipes => [...searchedRecipes, recipe])
          }
        })
      }

      if (checkedInfos.length > 1) {
        filteredRecipes.forEach(recipe => {
          if (checkRecipeTruthy(recipe, checkedInfos.length)) {
            setSearchedRecipes([])
            setSearchedRecipes(searchedRecipes => [...searchedRecipes, recipe])
          }
        })
      }
    }

    return () => {
      setSearchedRecipes([])
    }
  }, [diets, types, difficulties])

  const checkScrollPosition = () => {
    const recipesSectionPosition = document.querySelector("#recipes").offsetTop
    setIsActive(false)
    if (window.scrollY + window.innerHeight - 150 > recipesSectionPosition)
      setIsActive(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition)
    return () => {
      window.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  return (
    <RecipesWrapper id="recipes">
      <FilterBar isOpen={isOpen} clearFiltering={clearFiltering} />
      <TopContainer>
        <SearchbarContainer>
          <h2>Przepisy</h2>
          <SearchBar />
        </SearchbarContainer>
        {/* <FilterBar isOpen={isOpen} clearFiltering={clearFiltering} /> */}
      </TopContainer>
      <CardsContainer>
        <FiltersButton isActive={isActive}>
          <BsFilterCircleFill onClick={filterBarHandler} />
        </FiltersButton>
        {info.diets || info.difficulties || info.types
          ? searchedRecipes.map(recipe => {
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
