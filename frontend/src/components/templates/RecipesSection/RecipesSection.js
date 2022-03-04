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
  const { info } = useContext(StateContext)
  const filterBarHandler = () => {
    setIsOpen(!isOpen)
  }
  let uniqueArr = []
  let checkedInfos = []

  useEffect(() => {
    if (info.diets || info.difficulties || info.types) {
      for (const key in info) {
        if (info[key] != "") {
          checkedInfos.push(info[key])
        }
      }
      console.log(checkedInfos)

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
    }
    // for (const key in info) {
    //   console.log(info[key])
    // }
    // if (info.diets) {
    //   recipes.forEach(recipe => {
    //     if (info["diets"] === recipe["diets"][0]["diets"]) {
    //       // filteredRecipes.push(recipe)
    //       setFilteredRecipes([...filteredRecipes, recipe])
    //       console.log(filteredRecipes)
    //     }
    //   })
    // }
    // if (info.difficulties) {
    //   recipes.forEach(recipe => {
    //     if (
    //       info["difficulties"] === recipe["difficulties"][0]["difficulties"]
    //     ) {
    //       setFilteredRecipes([...filteredRecipes, recipe])
    //     }
    //   })
    // }
    // if (info.types) {
    //   recipes.forEach(recipe => {
    //     if (info["types"] === recipe["types"][0]["types"]) {
    //       setFilteredRecipes([...filteredRecipes, recipe])
    //     }
    //   })
    // }
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
