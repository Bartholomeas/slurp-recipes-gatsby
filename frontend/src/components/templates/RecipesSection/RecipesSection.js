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
import axios from "axios"

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

  useEffect(async () => {
    const fetchUrl = await fetch(`http://localhost:1337/recipes`)
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])

  const [recipes, setRecipes] = useState(data.allStrapiRecipes.nodes)
  const [isOpen, setIsOpen] = useState(false)
  const { info, setInfo } = useContext(StateContext)
  let filteredRecipes = []

  console.log(info)

  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton onClick={() => setIsOpen(!isOpen)} content="filters" />
      <FiltersButton onClick={() => setInfo()} content="filters" />
      <RecipesContainer>
        <FilterBar isOpen={isOpen} />
        <CardsContainer>
          {data ? (
            info.diets || info.difficulties || info.types ? (
              (filteredRecipes = recipes
                .filter(recipe => {
                  for (const key in info) {
                    if (info[key] === recipe[key][0][key]) {
                      filteredRecipes.push(recipe)
                      return recipe
                    }
                  }
                })
                .map(filteredRecipe => {
                  console.log(filteredRecipe["difficulties"])
                  return (
                    <Card key={filteredRecipe.id} payload={filteredRecipe} />
                  )
                }))
            ) : (
              recipes.map(recipe => {
                return <Card key={recipe.id} payload={recipe} />
              })
            )
          ) : (
            <p>We dont have any recipes.. :C</p>
          )}
        </CardsContainer>
      </RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
