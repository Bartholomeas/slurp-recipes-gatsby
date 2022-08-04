import React, { useState } from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  IconsContainer,
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
  IngredientsContainer,
  IngredientsHeader,
  IngredientsList,
  IngredientsItem,
  ShareBox,
} from "./recipe-details-styles"
import SharePanel from "../molecules/SharePanel/SharePanel"
import RatingIndicator from "../molecules/RatingIndicator/RatingIndicator"

const RecipeDetails = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const recipeInfo = data.strapiRecipes
  const image = recipeInfo.img
    ? getImage(recipeInfo.img.localFile.childImageSharp.gatsbyImageData)
    : null

  return (
    <>
      <Wrapper>
        <GeneralContainer>
          <RecipeImage image={image} alt="Food header img" />

          <ContentContainer>
            <RecipeHeader>{recipeInfo.title}</RecipeHeader>
            <RatingIndicator rating={recipeInfo.rating} />
            <InfoBoxes>
              <InfoBox>
                <InfoCategory>dieta</InfoCategory>
                <InfoValue>
                  {recipeInfo.diets[0] ? recipeInfo.diets[0].diets : "balanced"}
                </InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>trudność</InfoCategory>
                <InfoValue>
                  {recipeInfo.difficulties[0]
                    ? recipeInfo.difficulties[0].difficulties
                    : "?"}
                </InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>czas przygotowania</InfoCategory>
                <InfoValue>{recipeInfo.time}min</InfoValue>
              </InfoBox>
              <InfoBox>
                <InfoCategory>kalorie</InfoCategory>
                <InfoValue> ~{recipeInfo.calories} kcal</InfoValue>
              </InfoBox>
            </InfoBoxes>
            <IconsContainer>
              <ShareBox>
                <button
                  aria-label="Przycisk do udostępniania"
                  onClick={() => setIsOpen(!isOpen)}
                  style={{ background: "none", border: "none" }}
                >
                  <ShareIcon />
                </button>
                <SharePanel
                  onClick={() => setIsOpen(!isOpen)}
                  isOpen={isOpen}
                  title={recipeInfo.title}
                />
              </ShareBox>

              <PrintIcon onClick={() => window.print()} />
            </IconsContainer>
          </ContentContainer>
        </GeneralContainer>

        <RecipeWrapper>
          <PreparationContainer>
            <PrepHeader>Przygotowanie</PrepHeader>
            <StepList>
              {recipeInfo.preparation.split("*/*").map((step, idx) => {
                return <StepListItem key={idx}>{step.trim()}</StepListItem>
              })}
            </StepList>
          </PreparationContainer>
          <IngredientsContainer>
            <IngredientsHeader>Składniki</IngredientsHeader>
            <IngredientsList>
              {recipeInfo.ingredients.split("*/*").map((step, idx) => {
                return (
                  <IngredientsItem key={idx}>{step.trim()}</IngredientsItem>
                )
              })}
            </IngredientsList>
          </IngredientsContainer>
        </RecipeWrapper>
      </Wrapper>
    </>
  )
}

export default RecipeDetails

export const query = graphql`
  query RecipeDetails($slug: String) {
    strapiRecipes(title: { eq: $slug }) {
      id
      rating
      title
      ingredients
      preparation
      time
      calories
      types {
        types
      }
      img {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
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
