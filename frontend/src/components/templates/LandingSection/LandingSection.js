import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../atoms/Button/Button"
import {
  LandingWrapper,
  TextWrapper,
  LandingText,
  FeaturedRecipesWrapper,
  FeaturedRecipesHeader,
  CardsContainer,
  ColoredText,
} from "./LandingSection.styles"
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
            filter: "brightness(50%)",
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
        <FeaturedRecipesHeader>Recipes of the day</FeaturedRecipesHeader>
        <CardsContainer>
          <CardLight difficulty="easy" title="Pasta alla arrabiata" />
          <CardLight difficulty="medium" title="Chleb z serem" />
          <CardLight difficulty="hard" title="Chleb z serem" />
        </CardsContainer>
      </FeaturedRecipesWrapper>
    </LandingWrapper>
  )
}
export default LandingSection
