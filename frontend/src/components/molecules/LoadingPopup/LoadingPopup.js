import React from "react"
import styled, { keyframes } from "styled-components"

const spinner = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`

export const Circle = styled.span`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 60px;
  width: 60px;
  border: 18px solid;
  border-color: ${({ theme }) => theme.colors.accent} transparent
    ${({ theme }) => theme.colors.accent} transparent;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 100%;
  animation: 1.5s linear infinite ${spinner};
`

export const LoadingText = styled.p`
  font-size: 2.4rem;
`

const LoadingPopup = () => {
  return (
    <>
      <Circle />
    </>
  )
}

export default LoadingPopup
