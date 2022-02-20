import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../atoms/Button/Button"
import {
  LandingWrapper,
  TextWrapper,
  LandingText,
  FeaturedRecipesWrapper,
  ColoredText,
} from "./LandingSection.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"
import CardLight from "../../organisms/CardLight/CardLight"

const LandingSection = () => {
  return (
    <LandingWrapper>
      <TextWrapper>
        <LandingText>
          Best tastes of your life with <ColoredText>our recipes</ColoredText>
        </LandingText>
        <StaticImage
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            zIndex: "-100",
            opacity: "0.2",
            backgroundAttachment: "fixed",
          }}
          src="../../../images/landing.jpg"
          placeholder="blurred"
          alt="Pizza"
        />
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
      <FeaturedRecipesWrapper>
        <CardLight title="Chleb z serem" />

        {/* <StaticImage
          style={{
            position: "absolute",
            height: "100%",
            backgroundAttachment: "fixed",
          }}
          src="../../../images/landing.jpg"
          placeholder="blurred"
          alt="Pizza"
        /> */}
      </FeaturedRecipesWrapper>
    </LandingWrapper>
  )
}
export default LandingSection
