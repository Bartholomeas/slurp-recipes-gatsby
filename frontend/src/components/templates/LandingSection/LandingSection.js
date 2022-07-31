import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import {
  LandingWrapper,
  LandingImg,
  TextWrapper,
  LandingHeader,
  PlatesWrapper,
  PlatesBox,
} from "./LandingSection.styles"
import Button from "../../atoms/Button/Button"

const LandingSection = () => {
  const { backgroundLandingImage } = useStaticQuery(graphql`
    query GetBackgroundImage {
      backgroundLandingImage: file(relativePath: { eq: "landingMarble.jpg" }) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 1950
            webpOptions: { quality: 70 }
            quality: 50
          )
        }
      }
    }
  `)

  const pluginImage = getImage(backgroundLandingImage)

  return (
    <LandingImg image={pluginImage}>
      <LandingWrapper>
        <TextWrapper>
          <LandingHeader>
            <span> Przepisy </span>idealnie skrojone na każdą okazję.
          </LandingHeader>
          <p>
            Ciężko pracujemy aby w twojej kuchni nie zapanowała kuchenna nuda.
            Chcesz się przekonać?
          </p>
          <a href="#recipes">
            <Button isLong={true} accentColor={true}>
              Sprawdź
            </Button>
          </a>
        </TextWrapper>

        <PlatesWrapper>
          <PlatesBox>
            <StaticImage
              style={{
                width: "clamp(200px, 400px, 500px)",
                backgroundSize: "cover",
                zIndex: "10",
                alignSelf: "center",
              }}
              src="../../../images/landingPlate1.png"
              placeholder="blurred"
              alt="Plate with dish"
            />
            <StaticImage
              style={{
                width: "clamp(200px, 400px, 500px)",
                backgroundSize: "cover",
                zIndex: "10",
                alignSelf: "center",
              }}
              src="../../../images/landingPlate2.png"
              placeholder="blurred"
              alt="Plate with dish"
            />
            <StaticImage
              style={{
                width: "clamp(200px, 400px, 500px)",
                backgroundSize: "cover",
                zIndex: "10",
                alignSelf: "center",
              }}
              src="../../../images/landingPlate3.png"
              placeholder="blurred"
              alt="Plate with dish"
            />
          </PlatesBox>
        </PlatesWrapper>
      </LandingWrapper>
    </LandingImg>
  )
}
export default LandingSection
