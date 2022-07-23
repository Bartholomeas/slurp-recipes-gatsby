import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import CardLight from "../CardLight/CardLight"

export const FeaturedRecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.base};
  @media only screen and (min-width: 768px) {
    height: auto;
    width: 100%;
  }
`

export const FeaturedRecipesHeader = styled.h2`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.accent};
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    max-width: ${({ theme }) => theme.otherStyles.maxWidth};
  }
`
const FeaturedRecipes = () => {
  const {
    allStrapiRecipes: { nodes: recipes },
  } = useStaticQuery(graphql`
    query GetFeaturedRecipes {
      allStrapiRecipes(limit: 3) {
        nodes {
          id
          difficulties {
            difficulties
          }
          title
          img {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <FeaturedRecipesWrapper>
      <FeaturedRecipesHeader>Przepisy dnia</FeaturedRecipesHeader>
      <CardsContainer>
        {recipes.map(recipe => {
          return <CardLight payload={recipe} key={recipe.id} />
        })}
      </CardsContainer>
    </FeaturedRecipesWrapper>
  )
}

export default FeaturedRecipes
