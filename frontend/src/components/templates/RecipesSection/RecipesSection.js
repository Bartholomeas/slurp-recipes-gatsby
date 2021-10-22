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

  // async function getRecipes() {
  //   const datez = await fetch("http://localhost:1337/recipes", {
  //     method: "GET",
  //   })
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   return datez
  // }
  // getRecipes()

  const recipes = data.allStrapiRecipes.nodes
  const [isOpen, setIsOpen] = useState(false)
  const info = useContext(StateContext)

  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton onClick={() => setIsOpen(!isOpen)} content="filters" />
      <RecipesContainer>
        <FilterBar isOpen={isOpen} />
        <CardsContainer>
          {data ? (
            recipes.map(recipe => <Card key={recipe.id} payload={recipe} />)
          ) : (
            <p>We dont have any recipes.. :C</p>
          )}
        </CardsContainer>
      </RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
