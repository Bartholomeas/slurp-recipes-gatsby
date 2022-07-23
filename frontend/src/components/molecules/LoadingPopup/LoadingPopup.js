import React from "react"
import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  height: 160px;
  width: 160px;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};
  z-index: 99999;
`
const spinner = keyframes`
from {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
}
to {
    transform:translate3d(-50%, -50%, 0) rotate(360deg);
}
`

export const Circle = styled.span`
  height: 40px;
  &::before {
    content: "";
    position: fixed;
    height: 60px;
    width: 60px;
    border: solid 8px ${({ theme }) => theme.colors.darkGrey};
    border-bottom-color: ${({ theme }) => theme.colors.base};
    border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
    animation: 1.5s linear infinite ${spinner};
    transform: translate3d(-50%, -50%, 0);
  }
`

export const LoadingText = styled.p`
  font-size: 2.4rem;
`

const LoadingPopup = () => {
  return (
    <Wrapper>
      <Circle />
      <LoadingText>Czekaj..</LoadingText>
    </Wrapper>
  )
}

export default LoadingPopup
