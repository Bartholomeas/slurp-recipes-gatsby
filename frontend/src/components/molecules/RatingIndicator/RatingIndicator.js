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
  /* align-items: center; */
  align-self: flex-start;
  gap: 0.8rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
`

const RatingIndicator = () => {
  return (
    <Wrapper>
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarFullOutline />
      <TiStarHalfOutline />
      <TiStarOutline />
    </Wrapper>
  )
}
export default RatingIndicator
