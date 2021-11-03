import React from "react"
import styled from "styled-components"

const CardLabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 7rem;
  width: 100%;
  padding: 0.6rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.baseColor};
  color: ${({ theme }) => theme.colors.lightFont};
`
const CardDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  width: 100%;
`

const CardDetails = styled.p`
  font-size: 1.2rem;
`

const CardLabelTitle = styled.p`
  font-size: 1.6rem;
  flex-grow: 1;
  font-weight: 700;
`

const CardLabel = ({ title, type, difficulty, time }) => {
  return (
    <CardLabelWrapper>
      <CardDetailsWrapper>
        <CardDetails>
          {difficulty[0] ? difficulty[0].difficulties : "?"}
        </CardDetails>
        <CardDetails>{type[0]   ? type[0].types : "?"}</CardDetails>
        <CardDetails>{time} min</CardDetails>
      </CardDetailsWrapper>
      <CardLabelTitle>{title.toLowerCase()}</CardLabelTitle>
    </CardLabelWrapper>
  )
}

export default CardLabel
