import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../providers/Layout"
import {
  RecipeDetailsSection,
  HeaderRecipeDetailsImg,
  RecipeDetailsHeader,
  RecipeDetailsWrapper,
  RecipeInfoContainer,
  RecipeInfoTitle,
  RecipeInfoValue,
  RecipeDetailsLine,
  PreparationsWrapper,
  IngredientsContainer,
  PreparationContainer,
  PreparationsHeader,
  IconsWrapper,
  FacebookIcon,
  ShareIcon,
  PrinterIcon,
} from "./recipe-details-styles"

const RecipeDetails = ({ data }) => {
  const recipeInfo = data.strapiRecipes
  const image = getImage(
    recipeInfo.img.localFile.childImageSharp.gatsbyImageData
  )
  console.log(recipeInfo)

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>s:urp {recipeInfo.title}</title>
        <meta
          name="description"
          content="Best recipes that will be loved by everyone of your family, friends, kids or animals!"
        />
        <link rel="canonical" href="http://localhost:8000/" />
      </Helmet>

      <RecipeDetailsSection>
        <HeaderRecipeDetailsImg image={image} alt="Food header img" />
        <RecipeDetailsHeader content={recipeInfo.title}></RecipeDetailsHeader>
        <RecipeDetailsWrapper>
          <RecipeInfoContainer>
            <RecipeInfoTitle>cook time</RecipeInfoTitle>
            <RecipeInfoValue>~{recipeInfo.time} min</RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>difficulity</RecipeInfoTitle>
            <RecipeInfoValue>
              {recipeInfo.difficulties[0].difficulty}
            </RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>diet</RecipeInfoTitle>
            <RecipeInfoValue>
              {recipeInfo.diets[0] ? recipeInfo.diets[0].diet : "standard"}
            </RecipeInfoValue>
          </RecipeInfoContainer>
        </RecipeDetailsWrapper>

        <PreparationsWrapper>
          <IngredientsContainer>
            <PreparationsHeader>ingredients</PreparationsHeader>
            {recipeInfo.ingredients.split("-")}
          </IngredientsContainer>
          <PreparationContainer>
            <PreparationsHeader>preparation</PreparationsHeader>
            {recipeInfo.preparation}
          </PreparationContainer>
        </PreparationsWrapper>
        <IconsWrapper>
          <FacebookIcon />
          <ShareIcon />
          <PrinterIcon onClick={() => window.print()} />
        </IconsWrapper>
      </RecipeDetailsSection>
    </Layout>
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
        diet
      }
      difficulties {
        difficulty
      }
    }
  }
`
