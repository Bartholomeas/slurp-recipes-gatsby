import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import CardLabel from "../../atoms/CardLabel/CardLabel"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin: 0 2rem 2rem 2rem;
  background-color: ${({ theme }) => theme.darkerBase};
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 2rem;
  }
`

export const CardImg = styled(GatsbyImage)`
  background-size: cover;
  background-position: center;
  height: 250px;
`

const Card = ({ img }) => {
  return (
    <CardWrapper>
      <CardImg image={img} alt="Food image" />
      <CardLabel />
    </CardWrapper>
  )
}

export default Card
