import React from "react"
import styled from "styled-components"

const CardLabelWrapper = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0.6rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.darkerBase};
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.lightFont};

`

const CardLabelType = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const CardLabelTitle = styled.p`
  font-size: 1.4rem;
`

const CardLabel = () => {
  return (
    <CardLabelWrapper>
      <CardLabelType>dinner</CardLabelType>
      <CardLabelTitle>Sushi Futomaki</CardLabelTitle>
    </CardLabelWrapper>
  )
}

export default CardLabel
