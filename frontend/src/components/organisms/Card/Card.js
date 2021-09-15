import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const CardWrapper = styled.div`
  height: 300px;
  margin: 0 2rem 2rem 2rem;
  background-color: skyblue;

  @media only screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 2rem;
  }
`

export const CardImg = styled(GatsbyImage)`
  background-size: cover;
  background-position: center;
  height: 100%;
`

const Card = ({ img }) => {
  return (
    <CardWrapper>
      <CardImg image={img} />
    </CardWrapper>
  )
}

export default Card
