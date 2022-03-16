import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  AiFillFacebook,
  AiOutlineShareAlt,
  AiFillPrinter,
} from "react-icons/ai"

export const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: gold;
  min-height: 200vh;
  width: 100%;
  padding-top: 7rem;
  @media only screen and (min-width: 768px) {
    max-width: 1200px;
    height: 200vh;
    /* left: 10rem; */
    /* left:-50%; */
    transform:translateX(50%)
    padding-top: 10rem;
  }
`

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 950px;
  height: auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.offLightSecondary};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    max-height: 500px;
    overflow: hidden;
  } ;
`

export const RecipeImage = styled(GatsbyImage)`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  background-size: cover;
  border-radius: 6px;
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: 768px) {
    width: auto;
    height: 100%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;
`

export const RecipeHeader = styled.h2`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const InfoBoxes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
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
export const PreparationContainer = styled.div``
