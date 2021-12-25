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
        <StaticImage
          style={{
            position: "absolute",
            height: "100%",
            backgroundAttachment: "fixed",
          }}
          src="../../../images/landing.jpg"
          placeholder="blurred"
          alt="Pizza"
        />
      </ImageWrapper>
    </LandingWrapper>
  )
}
export default LandingSection
