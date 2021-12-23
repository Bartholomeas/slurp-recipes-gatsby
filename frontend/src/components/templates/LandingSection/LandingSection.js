import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../atoms/Button/Button"
import {
  LandingWrapper,
  TextWrapper,
  LandingText,
  ImageWrapper,
  ImageContainer,
  LandingImage,
  ColoredText,
} from "./LandingSection.styles"

const LandingSection = () => {
  return (
    <LandingWrapper>
      <TextWrapper>
        <LandingText>
          Best tastes of your life with <ColoredText>our recipes</ColoredText>
        </LandingText>
        <Button href="/contact" content="Send us recipe"></Button>
        {/* <Button
          href="/contact"
          content={
            <a
              style={{ textDecoration: "none", padding: "2rem" }}
              href="/contact"
            >
              Send us recipe!
            </a>
          }
        ></Button> */}
      </TextWrapper>
      <ImageWrapper>
        {/* <ImageContainer> */}
        <StaticImage
          src="../../../../static/landing.jpg"
          placeholder="blurred"
          alt="Pizza"
        />
        {/* <LandingImage
          src="../../../../static/landing.jpg"
          placeholder="blurred"
          alt="Pizza"
        /> */}
        {/* </ImageContainer> */}
      </ImageWrapper>
    </LandingWrapper>
  )
}
export default LandingSection
