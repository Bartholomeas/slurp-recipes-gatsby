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

  const [recipes, setRecipes] = useState(data.allStrapiRecipes.nodes)
  const [isOpen, setIsOpen] = useState(false)
  const { filteredRecipes, setFilteredRecipes } = useContext(StateContext)
  const {
    info,
    info: { diets, difficulties, types },
  } = useContext(StateContext)
  const filterBarHandler = () => {
    setIsOpen(!isOpen)
  }
  let checkedInfos = []

  useEffect(() => {
    if (info.diets || info.difficulties || info.types) {
      for (const key in info) {
        if (info[key] != "") {
          checkedInfos.push(key)
        }
      }
      console.log(checkedInfos)

      // if (recipe[checked][0][checked] === info[checked]) {}
    }
    // if (
    //   recipe[checkedInfos[0]][0][checkedInfos[0]] === info[checkedInfos[0]]
    // ) {
    //   console.log(recipe)
    // }

    // checkedInfos.forEach(checked => {
    //   console.log(`Info checked to jest ${info[checked]}`)
    //   console.log(`TO JEST checked  to jest ${checked}`)
    // })

    // uniqueArr = recipes.filter(recipe => {
    //   for (const key in info) {
    //     // if (info[key] === recipe[key][0][key]) {
    //     //   console.log(recipe)
    //     // }

    //     if (info[key] != "") {
    //       if (info[key] === recipe[key][0][key]) {
    //         console.log(recipe)
    //         return recipe
    //       }
    //     }
    //   }
    // })
  }, [info["diets"], info["difficulties"], info["types"]])
  console.log(filteredRecipes)

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
