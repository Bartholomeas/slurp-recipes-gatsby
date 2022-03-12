import React, { useState, useEffect } from "react"
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
  const [featuredRecipes, setFeaturedRecipes] = useState([])

  const windowGlobal = typeof window !== "undefined" && window

  useEffect(() => {
    const token = JSON.parse(windowGlobal.localStorage.getItem("token"))
    const getRecipesOfTheDay = async () => {
      await axios
        .get(`${process.env.STRAPI_URL}/recipes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          for (let i = 0; i < 3; i++) {
            // console.log(data[i]["difficulties"][0]["difficulties"])
            setFeaturedRecipes(featuredRecipes => [...featuredRecipes, data[i]])
          }
        })
    }
    getRecipesOfTheDay()
    return () => setFeaturedRecipes([])
  }, [])
  console.log(featuredRecipes)
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
        ></Button>
      </TextWrapper>

      <FeaturedRecipesWrapper>
        <FeaturedRecipesHeader>Recipes of the day</FeaturedRecipesHeader>
        <CardsContainer>
          {featuredRecipes.map(recipe => {
            // console.log(recipe)
            return (
              <CardLight
                key={recipe.id}
                difficulty={recipe.difficulties[0].difficulties}
                title={recipe.title}
              />
            )
          })}
          {/* <CardLight difficulty="medium" title="Chleb z serem" />
          <CardLight difficulty="hard" title="Chleb z serem" /> */}{" "}
        </CardsContainer>
      </FeaturedRecipesWrapper>
    </LandingWrapper>
  )
}
export default LandingSection
