import React, { useState, useContext, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Card from "../../organisms/Card/Card"
import FilterBar from "../../organisms/FilterBar/FilterBar"
import {
  RecipesContainer,
  RecipesWrapper,
  FiltersButton,
  CardsContainer,
  FilterIcon,
} from "./RecipesSection.styles"
import { StateContext } from "../../../context/StateContext"

const RecipesSection = () => {
  const data = useStaticQuery(graphql`
    query GetRecipes {
      allStrapiRecipes {
        nodes {
          ingredients
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
          preparation
          img {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
    }
  `)

  const [recipes] = useState(data.allStrapiRecipes.nodes)
  const [isOpen, setIsOpen] = useState(false)
  // const { searchedRecipes, setSearchedRecipes } = useContext(StateContext)
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const {
    info,
    info: { diets, difficulties, types },
  } = useContext(StateContext)

  let checkedInfos = []
  let filteredRecipes = []
  let testArr = []

  const filterBarHandler = () => {
    setIsOpen(!isOpen)
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
            setSearchedRecipes(searchedRecipes => [...searchedRecipes, recipe])
            console.log(searchedRecipes)
          }
        })
      }

      if (checkedInfos.length > 1) {
        recipes.forEach((recipe, index, arr) => {
          let subtractValue = checkedInfos.length - 1
          if (index > 1) {
            console.log(recipe)
            console.log(arr)
            // console.log(`recipe id ${recipe.id}`)
            // console.log(`arr[id]  ${arr[index - subtractValue].id}`)
            if (recipe.id === arr[index - subtractValue].id) {
              console.log("id elementow sa takie same")

              setSearchedRecipes(searchedRecipes => [
                ...searchedRecipes,
                recipe,
              ])
            }
          }
        })
      }
    }

    // return () => {
    //   console.log("CLEANUP")
    //   setSearchedRecipes([])
    // }
  }, [diets, types, difficulties])
  // return <Card key={recipe.id} payload={recipe} />

  return (
    <RecipesWrapper>
      <FilterBar isOpen={isOpen} />
      <RecipesContainer>
        <FiltersButton>
          <FilterIcon onClick={filterBarHandler} />
        </FiltersButton>
        <CardsContainer>
          {info.diets || info.difficulties || info.types
            ? searchedRecipes.map(recipe => {
                return <Card key={recipe.id} payload={recipe} />
              })
            : recipes.map(recipe => {
                return <Card key={recipe.id} payload={recipe} />
              })}
        </CardsContainer>
      </RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
