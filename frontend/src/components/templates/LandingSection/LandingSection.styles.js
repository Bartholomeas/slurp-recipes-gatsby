import styled, { keyframes } from "styled-components"
import { BgImage } from "gbimage-bridge"

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
  gap: 3rem;
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.otherStyles.maxWidth};
  margin-top: 5rem;
  padding: 5rem 2rem;
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
  gap: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  text-align: center;
  z-index: 1000;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }

  & p {
    color: ${({ theme }) => theme.colors.fontLighter};
    max-width: 100%;
    font-size: 2rem;
    @media only screen and (min-width: 768px) {
      max-width: none;
    }
  }

  & a {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`

export const LandingHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  line-height: 1.3;
  font-size: 4rem;
  font-weight: 700;
  max-width: 600px;

  & span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media only screen and (min-width: 576px) {
    font-size: 4.8rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 5.6rem;
  }
`

export const PlatesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: auto; */
  height: 450px;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`
export const PlatesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  gap: 2rem;
  transform: rotate(-65deg);

  @media only screen and (min-width: 768px) {
    gap: 5rem;
    width: 100%;
  }
`
