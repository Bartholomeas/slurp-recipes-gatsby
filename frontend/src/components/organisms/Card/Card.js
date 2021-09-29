import React from "react"
import { getImage } from "gatsby-plugin-image"
import CardLabel from "../../atoms/CardLabel/CardLabel"
import { CardLink, CardWrapper, CardImg } from "./Card.styles"

const Card = ({ image, slug }) => {
  const img = getImage(image)
  return (
    <CardLink to={`/${slug}`}>
      <CardWrapper>
        <CardImg image={img} alt="Food image" />
        <CardLabel />
      </CardWrapper>
    </CardLink>
  )
}

export default Card
