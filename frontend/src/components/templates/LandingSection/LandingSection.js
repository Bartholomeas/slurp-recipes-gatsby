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
  //
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
          <Button isLong={true} accentColor={true}>
            Sprawdź
          </Button>
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

// const windowGlobal = typeof window !== "undefined" && window
// useEffect(() => {
//   const token = JSON.parse(windowGlobal.localStorage.getItem("token"))
//   const getRecipesOfTheDay = async () => {
//     await axios
//       .get(`${process.env.STRAPI_URL}/recipes`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(({ data }) => {
//         for (let i = 0; i < 3; i++) {
//           // console.log(recipes[i]["img"]["url"])
//           setFeaturedRecipes(featuredRecipes => [...featuredRecipes, data[i]])
//         }
//       })
//   }
//   getRecipesOfTheDay()
//   return () => setFeaturedRecipes([])
// }, [])
