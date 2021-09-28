import React, { useContext } from "react"
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
import StateContext from "../../../context/StateContext"

const LandingSection = () => {
  const value = useContext(StateContext)

  console.log(value)

  return (
    <LandingWrapper>
      <TextWrapper>
        <LandingText>
          Best tastes of your life with <ColoredText>our recipes</ColoredText>
        </LandingText>
        <Button to="/contact" content="Contact us!" />
      </TextWrapper>
      <ImageWrapper>
        <ImageContainer>
          <StaticImage
            src="../../../../static/pizza.png"
            placeholder="blurred"
            alt="Pizza"
            width={500}
          />
        </ImageContainer>
      </ImageWrapper>
    </LandingWrapper>
  )
}

export default LandingSection
