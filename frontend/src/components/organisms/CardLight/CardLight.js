import React from "react"
import styled from "styled-components"
import DifficultyIndicator from "../../atoms/DifficultyIndicator/DifficultyIndicator"

const Wrapper = styled.div``
const TextContainer = styled.div``
const Title = styled.p``
const Button = styled.button``

const ImageContainer = styled.div``
const Image = styled.img``

const CardLight = props => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>tytul</Title>
        <DifficultyIndicator></DifficultyIndicator>
        <Button>czytaj wiecej</Button>
      </TextContainer>

      <ImageContainer>
        <Image></Image>
      </ImageContainer>
    </Wrapper>
  )
}

export default CardLight
