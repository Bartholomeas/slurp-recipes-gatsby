import React from "react"
import styled from "styled-components"
import DifficultyIndicator from "../DifficultyIndicator/DifficultyIndicator"

const CardLabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
`
const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  width: 100%;
  background-color: tomato;
`

const CardDetails = styled.p`
  font-size: 1.6rem;
`

const CardLabelTitle = styled.p`
  font-size: 3rem;
  align-self: flex-start;
  flex-grow: 1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBase};
`

const CardLabel = ({ title, type, time }) => {
  return (
    <CardLabelWrapper>
      <CardLabelTitle>{title}</CardLabelTitle>
      <CardDetailsWrapper>
        <CardDetails>type: {type[0] ? type[0].types : "?"}</CardDetails>
        <CardDetails>time: {time} min</CardDetails>
      </CardDetailsWrapper>
    </CardLabelWrapper>
  )
}

export default CardLabel
