import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  AiFillMail,
  AiFillFacebook,
  AiOutlineShareAlt,
  AiFillPrinter,
} from "react-icons/ai"
import Header from "../atoms/Header/Header"

export const RecipeDetailsSection = styled.section`
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

export const HeaderRecipeDetailsImg = styled(GatsbyImage)`
  height: 30rem;
  width: 100%;
`
export const RecipeDetailsHeader = styled(Header)`
  font-size: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};

  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }
`

export const RecipeDetailsWrapper = styled.div`
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

export const RecipeInfoContainer = styled.div`
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
export const RecipeInfoTitle = styled.p`
  margin-bottom: 0.6em;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: 500;
  font-size: 1.8rem;
`
export const RecipeInfoValue = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  font-weight: 300;
`
export const RecipeDetailsLine = styled.div`
  height: 6px;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  @media only screen and (min-width: 768px) {
    width: 3px;
    height: 90%;
  }
`
export const PreparationsWrapper = styled.div`
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

export const IngredientsContainer = styled.aside`
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

export const PreparationContainer = styled.div`
  width: 100%;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  line-height: 3rem;
  font-weight: 300;

  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`

export const PreparationsHeader = styled.p`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  word-wrap: wrap;
  margin: 4rem 0 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
export const IconsWrapper = styled.div`
  position: relative;
  align-self: flex-end;
  margin: 2rem 0;
`

export const iconsStyle = css`
  height: 3rem;
  color: ${({ theme }) => theme.colors.baseColor};
  font-size: 3rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

export const FacebookIcon = styled(AiFillFacebook)`
  ${iconsStyle}
`
export const MailIcon = styled(AiFillMail)`
  ${iconsStyle}
`
export const ShareIcon = styled(AiOutlineShareAlt)`
  ${iconsStyle}
`
export const PrinterIcon = styled(AiFillPrinter)`
  ${iconsStyle}
`
