import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import {
  IconsContainer,
  FacebookIcon,
  ShareIcon,
  PrintIcon,
  Wrapper,
  GeneralContainer,
  RecipeHeader,
  RecipeImage,
  ContentContainer,
  InfoBox,
  InfoCategory,
  InfoValue,
  InfoBoxes,
  RecipeWrapper,
  PreparationContainer,
  PrepHeader,
  StepList,
  StepListItem,
  IngredientsBox,
  IngredientsHeader,
  IngredientsList,
  IngredientsItem,
} from "./recipe-details-styles"
import AddRecipeModal from "../organisms/AddRecipeModal/AddRecipeModal"

const RecipeDetails = ({ data }) => {
  const recipeInfo = data.strapiRecipes
  const image = recipeInfo.img
    ? getImage(recipeInfo.img.localFile.childImageSharp.gatsbyImageData)
    : null

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Siorb {recipeInfo.title}</title>
        <meta
          name="description"
          content="Best recipes that will be loved by everyone of your family, friends, kids or animals!"
        />
        <link rel="canonical" href="http://localhost:8000/contact" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Wrapper>
        <GeneralContainer>
          <RecipeImage image={image} alt="Food header img" />

          <ContentContainer>
            <RecipeHeader>{recipeInfo.title}</RecipeHeader>

            <InfoBoxes>
              <InfoBox>
                <InfoCategory>diet</InfoCategory>
                <InfoValue>
                  {recipeInfo.diets[0] ? recipeInfo.diets[0].diets : "balanced"}
                </InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>difficulty</InfoCategory>
                <InfoValue>
                  {recipeInfo.difficulties[0]
                    ? recipeInfo.difficulties[0].difficulties
                    : "?"}
                </InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>time</InfoCategory>
                <InfoValue>{recipeInfo.time}min</InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>calories</InfoCategory>
                <InfoValue> {parseInt(Math.random() * 1000)}kcal</InfoValue>
              </InfoBox>
            </InfoBoxes>
            <IconsContainer>
              <FacebookIcon />
              <ShareIcon />
              <PrintIcon onClick={() => window.print()} />
            </IconsContainer>
          </ContentContainer>
        </GeneralContainer>

        <RecipeWrapper>
          <PreparationContainer>
            <PrepHeader>Preparation</PrepHeader>
            <StepList>
              {recipeInfo.preparation.split("*/*").map((step, idx) => {
                return <StepListItem key={idx}>{step.trim()}</StepListItem>
              })}
            </StepList>
          </PreparationContainer>
          <IngredientsBox>
            <IngredientsHeader>Ingredients</IngredientsHeader>
            <IngredientsList>
              {recipeInfo.ingredients.split("*/*").map((step, idx) => {
                return (
                  <IngredientsItem key={idx}>{step.trim()}</IngredientsItem>
                )
              })}
            </IngredientsList>
          </IngredientsBox>
        </RecipeWrapper>
      </Wrapper>

      <AddRecipeModal />
    </>
  )
}

export default RecipeDetails

export const query = graphql`
  query RecipeDetails($slug: String) {
    strapiRecipes(title: { eq: $slug }) {
      id
      title
      ingredients
      preparation
      time
      types {
        types
      }
      img {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      diets {
        diets
      }
      difficulties {
        difficulties
      }
    }
  }
`
