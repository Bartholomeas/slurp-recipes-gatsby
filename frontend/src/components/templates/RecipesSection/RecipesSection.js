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

  const [active, setActive] = useState("active")

  const handleActive = () => {
    console.log(active)
    setActive(active != "" ? "" : "active")
  }

  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton
        onClick={() => handleActive()}
        content="filters"
      ></FiltersButton>
      <RecipesContainer>
        <FilterBar className={active} />
        <CardsContainer className="active">
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
