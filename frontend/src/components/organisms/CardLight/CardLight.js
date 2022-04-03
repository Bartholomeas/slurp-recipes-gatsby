import React from "react"
import { getImage } from "gatsby-plugin-image"
import {
  CardLink,
  Wrapper,
  TextContainer,
  Title,
  Button,
  ImageContainer,
  CardImage,
} from "./CardLight.styles"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"

const CardLight = ({ payload }) => {
  const { title = "?", difficulties = "easy", img = "" } = payload

  const image = img ? getImage(img.localFile.childImageSharp) : null
  return (
    <Wrapper>
      <TextContainer>
        <Title>{title}</Title>
        <DifficultyIndicator difficulty={difficulties[0]["difficulties"]} />
        <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
          <Button>sprawdź →</Button>
        </CardLink>
      </TextContainer>

      <ImageContainer>
        <CardImage
          image={image}
          alt="Featured recipe photo"
          placeholder="blurred"
        ></CardImage>
        {/* <CardImage
            style={{
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
            image={image}
            src={image}
            // src="../../../images/landing2.jpg"
            placeholder="blurred"
            alt="Featured recipe photo"
          /> */}
      </ImageContainer>
    </Wrapper>
  )
}

export default CardLight
