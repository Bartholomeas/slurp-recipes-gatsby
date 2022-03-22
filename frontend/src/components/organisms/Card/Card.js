import React from "react"
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
} from "./Card.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"

const Card = ({ payload }) => {
  const {
    difficulties: difficulty = "none",
    img = "",
    title = "none",
    diets = "none",
    types: type = "none",
  } = payload
  const image = img ? getImage(img.localFile.childImageSharp) : {}

  return (
    <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
      <CardWrapper>
        {image ? <CardImg image={image} alt="Food image" /> : null}
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
          </CardInfoBottomContainer>
        </CardInfoContainer>
      </CardWrapper>
    </CardLink>
  )
}

export default Card
