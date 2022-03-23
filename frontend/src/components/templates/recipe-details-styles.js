import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  AiFillFacebook,
  AiOutlineShareAlt,
  AiFillPrinter,
} from "react-icons/ai"

const maxWidth = css`
  max-width: 900px;
`

const IconsStyle = css`
  /* position: absolute; */
  right: -5rem;
  top: 50%;
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  z-index: 10000;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkerSecondary};
  }
`

export const IconsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0;
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: none;
    position: absolute;
    flex-direction: column;
  }
`

export const FacebookIcon = styled(AiFillFacebook)`
  ${IconsStyle}
`
export const ShareIcon = styled(AiOutlineShareAlt)`
  ${IconsStyle}
`
export const PrintIcon = styled(AiFillPrinter)`
  ${IconsStyle}
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200vh;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  padding-top: 7rem;

  @media only screen and (min-width: 768px) {
    ${maxWidth};
    height: 200vh;
    padding: 6rem 2rem 4rem;
    margin-top: 7rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: 1rem;
  width: 100%;
  ${maxWidth}
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    max-height: 500px;
  }
`

export const RecipeImage = styled(GatsbyImage)`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  background-size: cover;
  background-position: fixed;
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    width: auto;
    height: 100%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.greenish};
  border-radius: 6px;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`

export const RecipeHeader = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`

export const InfoBoxes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
  padding-bottom: 3rem;
`
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoCategory = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondarySupport};
`
export const InfoValue = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryColor};
`

export const RecipeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  min-height: 50vh;
  padding: 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  @media only screen and (min-width: 768px) {
    width: 65%;
  }
`
export const PrepHeader = styled.h3`
  font-size: 4rem;
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.colors.darkerPrimary};
`
export const StepList = styled.ol`
  width: 100%;
  list-style: upper-roman inside;
  font-size: 1.6rem;
  line-height: 2.4rem;
`
export const StepListItem = styled.li`
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 2.4rem 0;
  &::marker {
    font-size: 4rem;
    list-style-type: none;
    line-height: 1.2rem;
    color: ${({ theme }) => theme.colors.darkerPrimary};
  }
`
export const IngredientsBox = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  top: 8rem;
  font-size: 1.4rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.offGreenish};
  overflow-y: scroll;

  @media only screen and (min-width: 768px) {
    position: sticky;
    width: 35%;
  }
`
export const IngredientsHeader = styled.h3`
  font-size: 2.4rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
`
export const IngredientsList = styled.ul`
  width: 90%;
  height: 100%;
  padding: 2rem 1.6rem;
  list-style: none;
  list-style-position: inside;
`
export const IngredientsItem = styled.li`
  position: relative;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  &::before {
    content: "🍔";
    position: absolute;
    margin-left: -20px;
    margin-right: 10px;
  }
`
