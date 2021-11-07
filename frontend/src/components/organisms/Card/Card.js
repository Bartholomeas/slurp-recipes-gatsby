import React from "react"
import { getImage } from "gatsby-plugin-image"
import CardLabel from "../../atoms/CardLabel/CardLabel"
import { CardLink, CardWrapper, CardImg } from "./Card.styles"

const Card = ({ payload }) => {
  const {
    difficulties = "none",
    img = "",
    time = "0",
    title = "none",
    types = "none",
  } = payload

  const image = img ? getImage(img.localFile.childImageSharp) : {}

  return (
    <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
      <CardWrapper>
        {image ? <CardImg image={image} alt="Food image" /> : null}
        <CardLabel
          type={types}
          difficulty={difficulties}
          time={time}
          title={title}
        />
      </CardWrapper>
    </CardLink>
  )
}

export default Card
