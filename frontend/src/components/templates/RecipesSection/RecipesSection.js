import React, { useState, useContext, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../../atoms/Header/Header"
import Card from "../../organisms/Card/Card"
import FilterBar from "../../organisms/FilterBar/FilterBar"
import {
  RecipesContainer,
  RecipesWrapper,
  FiltersButton,
  CardsContainer,
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

  const recipes = data.allStrapiRecipes.nodes
  const [isOpen, setIsOpen] = useState(false)
  const { info } = useContext(StateContext)
  // console.log(info)

  // console.log(info["diets"])

  let filteredRecipes = []

  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton onClick={() => setIsOpen(!isOpen)} content="filters" />
      <RecipesContainer>
        <FilterBar isOpen={isOpen} />
        <CardsContainer>
          {/* {data ? (
            recipes.map(recipe => <Card key={recipe.id} payload={recipe} />)
          ) : (
            <p>We dont have any recipes.. :C</p>
          )} */}

          {data ? (
            recipes.map(recipe => {
              // console.log(info)
              // console.log(recipe)
              // filteredRecipes.push(recipe)

              console.log(recipe.title)

              for (const key in info) {
                // console.log(info[key])
                if (info[key] === recipe[key][0][key]) {
                  console.log("PASUJO")
                }
                // console.log(recipe[key][0][key])
              }

              // console.log(filteredRecipes)
              // for (const key in info) {
              //   if (info[key]) {
              //     // console.log(info[key])
              //   }
              // }
            })
          ) : (
            // recipes.map(recipe => {
            //   console.log(...recipe["diets"])
            //   return <Card key={recipe.id} payload={recipe} />
            // })
            <p>We dont have any recipes.. :C</p>
          )}
        </CardsContainer>
      </RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
