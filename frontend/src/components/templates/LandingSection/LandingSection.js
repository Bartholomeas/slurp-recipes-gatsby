import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
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
import axios from "axios"

const LandingSection = () => {
  const {
    allStrapiRecipes: { nodes: recipes },
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
    }
  `)
  console.log(recipes)

  const [featuredRecipes, setFeaturedRecipes] = useState([])

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
        {/* <Button href="/contact" content="Send us recipe"></Button> */}
        <Button
          href="/contact"
          content={
            <a
              style={{
                textDecoration: "none",
                padding: "2rem",
                color: "white",
              }}
              href="/contact"
            >
              Send us recipe!
            </a>
          }
        />
      </TextWrapper>

      <FeaturedRecipesWrapper>
        <FeaturedRecipesHeader>Recipes of the day</FeaturedRecipesHeader>
        <CardsContainer>
          {recipes.map(recipe => {
            return <CardLight payload={recipe} key={recipe.id} />
          })}
        </CardsContainer>
      </FeaturedRecipesWrapper>
    </LandingWrapper>
  )
}
export default LandingSection
