import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
// import SearchBar from "../../molecules/SearchBar/SearchBar"
import {
  LandingWrapper,
  TextWrapper,
  LandingText,
  FeaturedRecipesWrapper,
  FeaturedRecipesHeader,
  CardsContainer,
} from "./LandingSection.styles"
import CardLight from "../../organisms/CardLight/CardLight"

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
  const {
    allStrapiRecipes: { nodes: recipes },
    backgroundLandingImage,
  } = useStaticQuery(graphql`
    query GetFeaturedRecipes {
      allStrapiRecipes(limit: 3) {
        nodes {
          id
          difficulties {
            difficulties
          }
          title
          img {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, placeholder: BLURRED)
              }
            }
          }
        }
      }

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
  console.log(backgroundLandingImage)
  // const image = getImage(backgroundLandingImage)
  // const bgImage = convertToBgImage(image)

  const pluginImage = getImage(backgroundLandingImage)

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

  return (
    <LandingWrapper>
      {/* <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
        Test
      </BackgroundImage> */}
      <BgImage image={pluginImage}>TEST</BgImage>
      <TextWrapper>
        <LandingText>
          <strong> Przepisy</strong> idealnie skrojone na każdą okazję.
          <p>
            Wspólnie z Wami pracujemy nad tym, aby każdy dzień był
            najsmaczniejszym dniem! Nie pozwólmy zapanować dietetycznej nudzie w
            naszym życiu.
          </p>
        </LandingText>

        {/* <StaticImage
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            zIndex: "-10",
            // filter: "brightness(20%)",
            backgroundAttachment: "fixed",
            alignSelf: "center",
          }}
          src="../../../images/landingMarble.jpg"
          placeholder="blurred"
          alt="Marble background"
        /> */}
        {/* <SearchBar /> */}
      </TextWrapper>

      {/* <FeaturedRecipesWrapper>
        <FeaturedRecipesHeader>Przepisy dnia</FeaturedRecipesHeader>
        <CardsContainer>
          {recipes.map(recipe => {
            return <CardLight payload={recipe} key={recipe.id} />
          })}
        </CardsContainer>
      </FeaturedRecipesWrapper> */}
    </LandingWrapper>
  )
}
export default LandingSection
