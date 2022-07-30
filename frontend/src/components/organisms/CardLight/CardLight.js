import React from "react"
import { getImage } from "gatsby-plugin-image"
import {
  CardLink,
  Wrapper,
  TextContainer,
  Title,
  BottomWrapper,
  Button,
  ImageContainer,
  CardImage,
} from "./CardLight.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"

const CardLight = ({ payload }) => {
  const { title = "", difficulties = "", img = "" } = payload
  const image = img ? getImage(img.localFile.childImageSharp) : null

  return (
    <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <BottomWrapper>
            <DifficultyIndicator difficulty={difficulties[0].difficulties} />
          </BottomWrapper>
        </TextContainer>

        <ImageContainer>
          <CardImage
            image={image}
            alt="Featured recipe photo"
            placeholder="blurred"
          ></CardImage>
        </ImageContainer>
      </Wrapper>
    </CardLink>
  )
}

export default CardLight
