import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import CardLight from "../CardLight/CardLight"
import { useDispatch, useSelector } from "react-redux"
import { recipesActions } from "../../../store/recipesSlice"

export const FeaturedRecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.base};

  @media only screen and (min-width: 768px) {
    height: auto;
    width: 100%;
  }
`

export const FeaturedRecipesHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.otherStyles.maxWidth};
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
const FeaturedRecipes = () => {
  const { recipes, featuredRecipes } = useSelector(state => state.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    const getRecipesData = async () => {
      const response = await recipes
      if (response.length > 0)
        dispatch(
          recipesActions.setFeaturedRecipes([
            response[0],
            response[1],
            response[2],
          ])
        )
    }
    getRecipesData()
  }, [recipes])

  return (
    <FeaturedRecipesWrapper>
      <FeaturedRecipesHeader>Przepisy dnia</FeaturedRecipesHeader>
      <CardsContainer>
        {featuredRecipes.map(recipe => {
          return <CardLight payload={recipe} key={recipe.id} />
        })}
      </CardsContainer>
    </FeaturedRecipesWrapper>
  )
}

export default FeaturedRecipes
