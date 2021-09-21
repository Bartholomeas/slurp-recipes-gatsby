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
// import { useSelector, useDispatch } from "react-redux"
// import { increment, decrement } from "../../../redux/counter"

const LandingSection = () => {
  // const { count } = useSelector(state => state.counter)
  // const dispatch = useDispatch()

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
