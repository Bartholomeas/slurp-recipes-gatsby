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
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  /* z-index: 10000; */
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkerSecondary};
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    gap: 1rem;
    width: auto;
  }

  @media print {
    display: none;
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
  justify-content: flex-start;
  gap: 1rem;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  padding-top: 7rem;

  @media only screen and (min-width: 768px) {
    ${maxWidth};
    margin-top: 7rem;
    left: 50%;
    transform: translateX(-50%);
  }
  @page {
    size: A4;
  }

  @media print {
    padding: 0;
    margin-top: 1rem;
    max-width: 100%;
    height: auto;
    min-height: auto;
  }
`

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: auto;
  width: 100%;
  ${maxWidth}
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 500px;
    max-height: 500px;
    padding: 0;
  }

  @media print {
    flex-direction: row;
    justify-content: space-between;
    height: 300px;
    max-height: 300px;
    padding: 0;
  }
`

export const RecipeImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  background-size: cover;
  background-position: fixed;
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media print {
    width: 60%;
    height: 300px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.greenish};
  border-radius: 6px;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }

  @media print {
    width: 40%;
    height: 300px;
  }
`

export const RecipeHeader = styled.h2`
  font-size: 3.2rem;
  /* line-height: 1.4rem; */
  color: ${({ theme }) => theme.colors.fontColor};
  @media only screen and (min-width: 768px) {
    font-size: 3.2rem;
  }
  @media print {
    font-size: 3rem;
  }
`

export const InfoBoxes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
  padding-bottom: 3rem;

  @media print {
    font-size: 1.6rem;
  }
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

  @media print {
    font-size: 1.6rem;
  }
`

export const RecipeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media print {
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
  @media print {
    width: 70%;
  }
`
export const PrepHeader = styled.h3`
  font-size: 4rem;
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.colors.darkerPrimary};
  @media print {
    font-size: 2.4rem;
    margin: 0;
  }
`
export const StepList = styled.ol`
  width: 100%;
  list-style: upper-roman inside;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media print {
    font-size: 1.2rem;
  }
`
export const StepListItem = styled.li`
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 2.4rem 0;
  &::marker {
    font-size: 4rem;
    list-style-type: none;
    line-height: 1.2rem;
    color: ${({ theme }) => theme.colors.darkerPrimary};

    @media print {
      font-size: 2rem;
    }
  }
`
export const IngredientsBox = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  top: 8rem;
  font-size: 1.4rem;
  padding: 0 2.4rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.offGreenish};
  overflow-y: scroll;

  @media only screen and (min-width: 768px) {
    position: sticky;
    width: 35%;
  }

  @media print {
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
  }

  @media print {
    position: static;
    width: 30%;
    height: auto;
    font-size: 1.2rem;
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
  @media print {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`
export const ShareBox = styled.div`
  position: relative;
`
