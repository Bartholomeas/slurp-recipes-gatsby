import React from "react"
import { graphql } from "gatsby"
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

const LandingSection = ({ data }) => {
  return (
    <LandingWrapper>
      <TextWrapper>
        <LandingText>
          Best tastes of your life with <ColoredText>our recipes</ColoredText>
        </LandingText>
        <Button content="Send us recipe"></Button>
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

export const query = graphql`
  query MyQuery {
    strapiRecipes {
      id
      title
    }
  }
`
// export const query = graphql`
//   query MyQuery($eq: String = "dinner") {
//     strapiRecipes(types: { elemMatch: { types: { eq: $eq } } }) {
//       id
//       title
//     }
//   }
// `
