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

  if (info.diets || info.difficulties || info.types) {
    console.log("diety sa true")
  }
  // console.log(info[1])

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
            info.diets || info.difficulties || info.types ? (
              recipes.filter(recipe => {
                for (const key in info) {
                  if (info[key] === recipe[key][0][key]) {
                    filteredRecipes.push(recipe)
                    console.log(filteredRecipes)
                  }
                }
              })
            ) : (
              console.log("NIE MA INFO.DIETS")
            )
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
