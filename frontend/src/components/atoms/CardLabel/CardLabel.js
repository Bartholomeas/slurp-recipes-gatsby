import React from "react"
import styled from "styled-components"

const CardLabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
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
  font-size: 1rem;
  font-weight: 300;
`

const CardLabelTitle = styled.p`
  font-size: 1.4rem;
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
