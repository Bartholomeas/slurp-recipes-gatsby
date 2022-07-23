import React from "react"
import axios from "axios"
import { getImage } from "gatsby-plugin-image"
import {
  CardLink,
  CardWrapper,
  CardImg,
  CardInfoContainer,
  CardRecipeInfos,
  CardLabelTitle,
} from "./Card.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"
import RatingIndicator from "../../molecules/RatingIndicator/RatingIndicator"

const Card = ({ payload }) => {
  const {
    difficulties: difficulty = "none",
    img = "",
    title = "none",
    diets = "none",
    types: type = "none",
  } = payload
  const image = img ? getImage(img.localFile) : null

  const windowGlobal = typeof window !== "undefined" && window

  let token = windowGlobal
    ? JSON.parse(windowGlobal.localStorage.getItem("token"))
    : null

  const getFavouriteRecipes = async e => {
    e.preventDefault()

    await axios
      .get(`${process.env.STRAPI_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => console.log(data.favouriteRecipes))
  }

  return (
    <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
      <CardWrapper>
        {image ? (
          <CardImg
            image={image}
            loading="eager"
            alt="Zdjęcie posiłku z przepisu"
          />
        ) : null}
        {/*<FavouriteButton onClick={e => getFavouriteRecipes(e)}>*/}
        {/*  <HeartEmpty />*/}
        {/*  <HeartFilled />*/}
        {/*</FavouriteButton>*/}
        <CardInfoContainer>
          <DifficultyIndicator
            difficulty={difficulty[0] ? difficulty[0].difficulties : "easy"}
          />
          {/* <CardInfoHeaderContainer> */}
          <CardLabelTitle>{title}</CardLabelTitle>
          <CardRecipeInfos>
            <p>{type[0] ? type[0].types : ""}</p>
            <p>{diets[0] ? diets[0].diets : ""}</p>
          </CardRecipeInfos>
          {/* </CardInfoHeaderContainer> */}
          {/* <CardInfoBottomContainer></CardInfoBottomContainer> */}
          <RatingIndicator />
        </CardInfoContainer>
      </CardWrapper>
    </CardLink>
  )
}

export default Card
