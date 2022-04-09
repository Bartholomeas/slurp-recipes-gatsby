import React from "react"
import axios from "axios"
import { getImage } from "gatsby-plugin-image"
import {
  CardLink,
  CardWrapper,
  CardImg,
  CardInfoContainer,
  CardInfoHeaderContainer,
  CardRecipeInfos,
  Circle,
  CardLabelTitle,
  CardInfoBottomContainer,
  HeartFilled,
  HeartEmpty,
  FavouriteButton,
  DetailsButton,
} from "./Card.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"

const Card = ({ payload }) => {
  const {
    id = "",
    difficulties: difficulty = "none",
    img = "",
    title = "none",
    diets = "none",
    types: type = "none",
  } = payload
  const image = img ? getImage(img.localFile) : null

  const checkFavouriteRecipe = () => {
    console.log("To jest ulubione")
    console.log(id)
  }
  // https://slurp-website.herokuapp.com/users/me

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
    // <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
    <CardWrapper>
      {image ? <CardImg image={image} alt="Food image" /> : null}
      <FavouriteButton onClick={e => getFavouriteRecipes(e)}>
        <HeartEmpty />
        <HeartFilled />
      </FavouriteButton>
      <CardInfoContainer>
        <CardInfoHeaderContainer>
          <CardRecipeInfos>
            {type[0] ? type[0].types : "?"}
            <Circle />
            {diets[0] ? diets[0].diets : "?"}
          </CardRecipeInfos>
          <CardLabelTitle>{title}</CardLabelTitle>
        </CardInfoHeaderContainer>

        <CardInfoBottomContainer>
          <DifficultyIndicator
            difficulty={difficulty[0] ? difficulty[0].difficulties : "easy"}
          />
          <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
            Sprawdź →
          </CardLink>
        </CardInfoBottomContainer>
      </CardInfoContainer>
    </CardWrapper>
    // </CardLink>
  )
}

export default Card

// query MyQuery {
//   allStrapiUsers(filter: {id: {eq: "Users_6244c0b9317ccd0016d98b59"}}) {
//     edges {
//       node {
//         favouriteRecipes {
//           favourites
//         }
//       }
//     }
//   }
// }
