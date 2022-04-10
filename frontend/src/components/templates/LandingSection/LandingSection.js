import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import {
  LandingWrapper,
  LandingImg,
  LandingLogoWrapper,
  TextWrapper,
  LandingHeader,
  PlatesWrapper,
  PlatesBox,
} from "./LandingSection.styles"
import Logo from "../../atoms/Logo/Logo"

const LandingSection = () => {
  // const { backgroundImage } = useStaticQuery(graphql`
  //   query GetBgImage {
  //     file(relativePath: { eq: "landingMarble.jpg" }) {
  //       id
  //       childImageSharp {
  //         gatsbyImageData(
  //           width: 1950
  //           webpOptions: { quality: 70 }
  //           quality: 50
  //         )
  //       }
  //     }
  //   }
  // `)
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
            <strong> Przepisy</strong> idealnie skrojone na każdą okazję.
          </LandingHeader>
          <p>
            Wspólnie z Wami pracujemy nad tym, aby każdy dzień był
            najsmaczniejszym dniem, precz z żywieniową nudą!
          </p>

          <LandingLogoWrapper>
            <Logo />
          </LandingLogoWrapper>
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
