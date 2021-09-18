import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Header from "../../atoms/Header/Header"
import Card from "../../organisms/Card/Card"
import FilterBar from "../../organisms/FilterBar/FilterBar"
import {
  RecipesContainer,
  RecipesWrapper,
  FiltersButton,
  CardsContainer,
} from "./RecipesSection.styles"
import styles from "../../../styles/user-stylesheet.css"

const RecipesSection = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allStrapiRecipes {
  //       nodes {
  //         diets {
  //           diet
  //         }
  //         difficulties {
  //           difficulty
  //         }
  //         ingredients
  //         time
  //         title
  //         preparation
  //         img {
  //           url
  //         }
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiRecipes {
        img {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  `)

  const image = getImage(data.strapiRecipes.img.localFile)

  console.log(image)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton onClick={() => setIsOpen(!isOpen)} content="filters" />
      <RecipesContainer>
        <FilterBar isOpen={isOpen} />
        <CardsContainer>
          <Card img={image} />
          <Card img={image} />
          <Card img={image} />
          <Card img={image} />
          <Card img={image} />
          <Card img={image} />
        </CardsContainer>
      </RecipesContainer>
    </RecipesWrapper>
  )
}

export default RecipesSection
