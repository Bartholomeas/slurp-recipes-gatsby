import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  CardLink,
  Wrapper,
  TextContainer,
  Title,
  Button,
  ImageContainer,
} from "./CardLight.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"

const CardLight = ({ title, difficulty }) => {
  return (
    <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <DifficultyIndicator difficulty={difficulty} />
          <Button>check →</Button>
        </TextContainer>

        <ImageContainer>
          <StaticImage
            style={{
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
            src="../../../images/landing2.jpg"
            placeholder="blurred"
            alt="Featured recipe photo"
          />
        </ImageContainer>
      </Wrapper>
    </CardLink>
  )
}

export default CardLight
