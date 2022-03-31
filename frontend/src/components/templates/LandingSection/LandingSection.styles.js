import styled from "styled-components"
import { BgImage } from "gbimage-bridge"

export const LandingImg = styled(BgImage)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  /* transform: scaleX(-1); */
  /* z-index: -1; */
`
export const LandingWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  max-width: 1600px;
  margin-top: 6rem;
  padding: 0 2rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: clamp(700px, 93vh, 1920px);
    width: 100%;
    max-width: 1920px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  max-width: 500px;
  padding: 4rem 0;
  color: ${({ theme }) => theme.colors.fontColor};
  /* box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow}; */
  background: none;
  text-align: left;
  z-index: 1000;

  & p {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`

export const LandingHeader = styled.h1`
  margin-bottom: 2rem;
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

export const TriangleBox = styled.div`
  /* position: relative; */
  width: 0;
  height: 0;
  right: 0;
  align-self: flex-end;
  /* border-bottom: 300px solid red; */
  border-bottom: 300px solid ${({ theme }) => theme.colors.greenish};
  border-left: 300px solid transparent;
  /* z-index: 1000; */

  @media only screen and (min-width: 768px) {
    border-bottom: 300px solid purple;
    border-left: 600px solid transparent;
  }
`

export const PlatesBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  right: 0;
  /* bottom: -10rem; */
  gap: 2rem;
  transform: rotate(-45deg);

  @media only screen and (min-width: 768px) {
    bottom: 0;
    top: 10%;
    right: -40%;
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
