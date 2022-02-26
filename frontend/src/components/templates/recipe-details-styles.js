import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import {
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
  max-width: 900px;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 7rem;

  @media print {
    margin: 0;
  }
`

export const HeaderRecipeDetailsImg = styled(GatsbyImage)`
  height: 30rem;
  width: 100%;

  @media print {
    height: 200px;
  }
`
export const RecipeDetailsHeader = styled(Header)`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};

  @media only screen and (min-width: 768px) {
    font-size: 5.4rem;
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
  background-color: ${({ theme }) => theme.colors.lightSecondary};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 10rem;
    padding: 2rem;
  }

  @media print {
    flex-direction: row;
    justify-content: center;
    height: 100px;
    width: 70%;
    padding: 0.8rem;
    margin: 0;
  }
`

export const RecipeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  &:last-child {
    border: none;
  }

  @media print {
    align-items: center;
  }
`
export const RecipeInfoTitle = styled.p`
  margin-bottom: 0.6em;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: 500;
  font-size: 1.8rem;

  @media print {
    width: 100px;
    font-size: 1.4rem;
  }
`
export const RecipeInfoValue = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  font-weight: 300;

  @media print {
    font-size: 1.2rem;
  }
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

  @media print {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const IngredientsContainer = styled.aside`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 2rem 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  font-size: 0.8em;

  @media only screen and (min-width: 768px) {
    width: 25%;
  }

  @media print {
    width: 35%;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
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

  @media print {
    width: 55%;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
  }
`

export const PreparationsHeader = styled.p`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  word-wrap: wrap;
  margin: 4rem 0 2rem;
  color: ${({ theme }) => theme.colors.baseColor};

  @media print {
    font-size: 2rem;
    font-weight: bold;
  }
`
export const IconsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin: 2rem 0;
  font-size: 3rem;

  @media print {
    display: none;
  }
`

export const iconsStyle = css`
  height: 3rem;
  width: 100%;
  margin-right: 2rem;
  color: ${({ theme }) => theme.colors.baseColor};
  font-size: 3rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const FacebookIcon = styled(AiFillFacebook)`
  ${iconsStyle}
`
export const ShareIcon = styled(AiOutlineShareAlt)`
  ${iconsStyle}
`
export const PrinterIcon = styled(AiFillPrinter)`
  ${iconsStyle}
`
