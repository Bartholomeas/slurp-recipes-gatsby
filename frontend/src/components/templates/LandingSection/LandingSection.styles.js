import styled, { keyframes } from "styled-components"
import { BgImage } from "gbimage-bridge"
import { StaticImage } from "gatsby-plugin-image"

const wiggle = keyframes`
from {
  transform:scale(1) rotate(-2deg);
}
to{
  transform:scale(0.9);

}`

export const LandingImg = styled(BgImage)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-size: cover;
`
export const LandingLogoWrapper = styled.div`
  width: 300px;
  animation: 3s ${wiggle} infinite alternate-reverse;
`

export const LandingWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin-top: 6rem;
  gap: 3rem;
  padding: 0 2rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: clamp(700px, 93vh, 1080px);
    max-height: 100vh;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  text-align: left;
  z-index: 1000;
  & strong {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  & p {
    /* font-size: 1.6rem; */
    color: ${({ theme }) => theme.colors.fontLighter};
  }
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`

export const SiteLogo = styled.p`
  color: ${({ theme }) => theme.colors.darkerPrimary};
  font-weight: bold;
  font-size: 3.2rem;
  padding: 2rem 0;
`

export const LandingHeader = styled.h1`
  /* margin-bottom: 2rem; */
  font-size: 4rem;
  font-weight: 300;
  max-width: 600px;

  @media only screen and (min-width: 576px) {
    font-size: 4.8rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 5.6rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 6.4rem;
  }
`

export const PlatesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  height: 400px;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`
export const PlatesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  /* height: 100%; */
  gap: 2rem;
  transform: rotate(-65deg);
  /* background-color: pink; */

  @media only screen and (min-width: 768px) {
    gap: 5rem;
    width: 100%;
  }
`
export const FeaturedRecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.greenish};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.shadow};

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 40%;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    gap: 0rem;
  }
`

export const FeaturedRecipesHeader = styled.h2`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 0;
    margin: 2rem 0;
  }
`
