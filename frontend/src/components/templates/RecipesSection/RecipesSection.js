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
  // const { filteredRecipes, setFilteredRecipes } = useContext(StateContext)
  const {
    info,
    info: { diets, difficulties, types },
  } = useContext(StateContext)

  let checkedInfos = []
  let filteredRecipes = []
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

      recipes.forEach(recipe => {
        checkedInfos.forEach(checked => {
          if (recipe[checked][0][checked] === info[checked]) {
            filteredRecipes.push(recipe)
          }
        })
      })

      filteredRecipes.forEach((recipe, index, arr) => {
        if (checkedInfos.length > 1) {
          // console.log(arr[index - checkedInfos.length - 1])
          const subtractValue = checkedInfos.length - 1
          const specifiedEl = arr[index - subtractValue]
          console.log(specifiedEl)
          // if (recipe.id === arr[index - checkedInfos.length - 1]) {}
        }
      })
    }
    console.log(filteredRecipes)
  }, [diets, types, difficulties])

  // [info["diets"], info["difficulties"], info["types"]]
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
            ? filteredRecipes.map(recipe => {
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
