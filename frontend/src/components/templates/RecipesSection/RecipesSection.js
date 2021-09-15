import React from "react"
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

  // console.log(data.allStrapiRecipes.nodes)
  // const { nodes } = data.allStrapiRecipes
  console.log(image)

  return (
    <RecipesWrapper>
      <Header content="all recipes" />
      <FiltersButton content="filters" />
      <RecipesContainer>
        <FilterBar />
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
