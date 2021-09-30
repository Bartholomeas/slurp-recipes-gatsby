import React from "react"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import {
  AiFillMail,
  AiFillFacebook,
  AiOutlineShareAlt,
  AiFillPrinter,
} from "react-icons/ai"
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
  margin: 0 auto;
  margin-top: 7rem;
`

const HeaderRecipeDetailsImg = styled(GatsbyImage)`
  height: 30rem;
  width: 100%;
`
const RecipeDetailsHeader = styled(Header)`
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
  height: 90vh;
  width: 100%;
  padding: 4rem;
  margin-bottom: 8rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
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
  height: 6px;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  @media only screen and (min-width: 768px) {
    width: 3px;
    height: 90%;
  }
`
const PreparationsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`

const IngredientsContainer = styled.aside`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 0.8em;
  line-height: 2.2rem;

  & ul {
    background-color: tomato;
  }

  @media only screen and (min-width: 768px) {
    width: 25%;
  }
`

const PreparationContainer = styled.div`
  width: 100%;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  line-height: 3rem;
  font-weight: 300;

  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`

const PreparationsHeader = styled.p`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  word-wrap: wrap;
  margin: 4rem 0 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
const IconsWrapper = styled.div`
  position: relative;
  align-self: flex-end;
  margin: 2rem 0;
`

const iconsStyle = css`
  height: 3rem;
  color: ${({ theme }) => theme.colors.baseColor};
  font-size: 3rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

const FacebookIcon = styled(AiFillFacebook)`
  ${iconsStyle}
`
const MailIcon = styled(AiFillMail)`
  ${iconsStyle}
`
const ShareIcon = styled(AiOutlineShareAlt)`
  ${iconsStyle}
`
const PrinterIcon = styled(AiFillPrinter)`
  ${iconsStyle}
`

const RecipeDetails = ({ data }) => {
  const recipeInfo = data.strapiRecipes
  const image = getImage(
    recipeInfo.img.localFile.childImageSharp.gatsbyImageData
  )
  console.log(recipeInfo)

  return (
    <Layout>
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
          <MailIcon />
          <FacebookIcon />
          <ShareIcon />
          <PrinterIcon />
        </IconsWrapper>
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
