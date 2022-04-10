import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import CardLight from "../CardLight/CardLight"

export const FeaturedRecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.greenish};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 40%;
  }
`

export const FeaturedRecipesHeader = styled.h2`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    margin: 2rem 0;
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
    gap: 0rem;
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
                gatsbyImageData(width: 300, placeholder: BLURRED)
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
