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
  opacity: 0.8;
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

const CardLabel = () => {
  return (
    <CardLabelWrapper>
      <CardDetailsWrapper>
        <CardDetails>easy</CardDetails>
        <CardDetails>dinner</CardDetails>
        <CardDetails>30 min</CardDetails>
      </CardDetailsWrapper>
      <CardLabelTitle>Sushi Futomaki</CardLabelTitle>
    </CardLabelWrapper>
  )
}

export default CardLabel
