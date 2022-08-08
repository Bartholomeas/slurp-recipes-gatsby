import React, { useState, useMemo } from "react"
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

const RatingIndicator = ({ rating }) => {
  const starRating = useMemo(() => {
    const ratingArray = [0, 0, 0, 0, 0]
    const ratingNumber = rating.toString().split(".")[0]
    const ratingDecimal = rating.toString().split(".")[1]
    for (let i = 0; i < ratingNumber; i++) {
      ratingArray[i] = 1
    }
    if (ratingDecimal) {
      ratingArray[ratingNumber] = 0.5
    }

    return ratingArray
  }, [rating])

  return (
    <Wrapper data-testid={"rating-indicator"}>
      {starRating.map((star, index) =>
        star === 1 ? (
          <TiStarFullOutline key={index} />
        ) : star === 0.5 ? (
          <TiStarHalfOutline key={index} />
        ) : (
          <TiStarOutline key={index} />
        )
      )}
    </Wrapper>
  )
}
export default RatingIndicator
