import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import {
  LandingWrapper,
  LandingImg,
  TextWrapper,
  SiteLogo,
  LandingHeader,
  TriangleBox,
  PlatesWrapper,
  PlatesBox,
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
          <SiteLogo>Slurp Recipes</SiteLogo>
        </TextWrapper>
        <PlatesWrapper>
          <PlatesBox>
            <StaticImage
              style={{
                // position: "absolute",
                // maxHeight: "200px",
                // height: "200px",
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
                // position: "absolute",
                // maxHeight: "200px",
                // height: "200px",
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
                // position: "absolute",
                // maxHeight: "200px",
                // height: "200px",
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
        {/* <FeaturedRecipesWrapper>
          <p>To jest test</p>
        </FeaturedRecipesWrapper> */}
        {/* <FeaturedRecipesWrapper>
        <FeaturedRecipesHeader>Przepisy dnia</FeaturedRecipesHeader>
        <CardsContainer>
        {recipes.map(recipe => {
          return <CardLight payload={recipe} key={recipe.id} />
        })}
        </CardsContainer>
      </FeaturedRecipesWrapper> */}
      </LandingWrapper>
    </LandingImg>
  )
}
export default LandingSection

{
  /* <StaticImage
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
        /> */
}
{
  /* <SearchBar /> */
}

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
