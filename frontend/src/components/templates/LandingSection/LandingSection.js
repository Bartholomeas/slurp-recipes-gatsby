import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../atoms/Button/Button"
import {
  LandingWrapper,
  TextWrapper,
  LandingText,
  ImageWrapper,
  ImageContainer,
  ColoredText,
} from "./LandingSection.styles"

const LandingSection = () => {
  return (
    <LandingWrapper>
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
    </LandingWrapper>
  )
}

export default LandingSection
