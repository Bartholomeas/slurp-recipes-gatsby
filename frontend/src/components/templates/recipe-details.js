import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../providers/Layout"
import Header from "../atoms/Header/Header"

const RecipeDetailsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  padding: 2rem;
  margin-top: 7rem;
  /* background-color: skyblue; */
`

const HeaderRecipeDetailsImg = styled(GatsbyImage)`
  height: 30rem;
  width: 100%;
`
const RecipeDetailsHeader = styled(Header)`
  margin: 4rem 0;
  font-size: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};

  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }
`

const RecipeDetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100%;
  /* padding: 4rem; */
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-evenly; */
    height: 10rem;
    padding: 2rem;
  }
`

const RecipeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  /* margin-bottom: 2em; */

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  &:last-child {
    border: none;
  }
`
const RecipeInfoTitle = styled.p`
  margin-bottom: 0.6em;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: 500;
  font-size: 1.8rem;
`
const RecipeInfoValue = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  font-weight: 300;
`
const RecipeDetailsLine = styled.div`
  height: 3px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  @media only screen and (min-width: 768px) {
    width: 3px;
    height: 90%;
  }
`

const RecipeDetails = ({ data }) => {
  const recipeInfo = data.strapiRecipes
  const { id, preparation } = recipeInfo
  const image = getImage(
    recipeInfo.img.localFile.childImageSharp.gatsbyImageData
  )
  console.log(data)

  return (
    <Layout>
      <RecipeDetailsSection>
        <HeaderRecipeDetailsImg image={image} alt="Food header img" />
        <RecipeDetailsHeader content="sushi futomaki"></RecipeDetailsHeader>
        <RecipeDetailsWrapper>
          <RecipeInfoContainer>
            <RecipeInfoTitle>difficulity</RecipeInfoTitle>
            <RecipeInfoValue>easy</RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>difficulity</RecipeInfoTitle>
            <RecipeInfoValue>easy</RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>difficulity</RecipeInfoTitle>
            <RecipeInfoValue>easy</RecipeInfoValue>
          </RecipeInfoContainer>
          <RecipeDetailsLine />
          <RecipeInfoContainer>
            <RecipeInfoTitle>difficulity</RecipeInfoTitle>
            <RecipeInfoValue>easy</RecipeInfoValue>
          </RecipeInfoContainer>
        </RecipeDetailsWrapper>
        <div>{id}</div>
        <div>{preparation}</div>
      </RecipeDetailsSection>
    </Layout>
  )
}

export default RecipeDetails

export const query = graphql`
  query RecipeDetails($slug: String) {
    strapiRecipes(id: { eq: $slug }) {
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
