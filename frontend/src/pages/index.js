import React from "react"
import Layout from "../components/providers/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Button from "../components/atoms/Button/Button"

const LandingPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 93vh;
  margin-top: 7rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  margin-bottom: 3rem;
  height: 50%;
  color: ${({ theme }) => theme.colors.fontColor};

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`
const LandingText = styled.p`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 576px) {
    font-size: 5.4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 7rem;
  }
`

const ColoredText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.baseColor};
`
const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  backround-color: tomato;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`

const Home = () => {
  return (
    <Layout>
      <LandingPage>
        <TextWrapper>
          <LandingText>
            Best tastes of your life with <ColoredText>our recipes</ColoredText>
          </LandingText>
          <Button content="Contact us!" />
        </TextWrapper>
        <ImageWrapper>
          <ImageContainer>
            <StaticImage
              src="../images/pizza.png"
              placeholder="blurred"
              alt="Pizza"
            />
          </ImageContainer>
        </ImageWrapper>
      </LandingPage>
    </Layout>
  )
}

export default Home
