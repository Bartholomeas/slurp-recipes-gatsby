import React from "react"
import styled from "styled-components"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
`

const RatingIndicator = () => {
  return <Wrapper>ssstar</Wrapper>
}

export default RatingIndicator
