import React from "react"
import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* top: 50%;
  left: 50%; */
  margin: 0 auto;
  height: 180px;
  width: 200px;
  border-radius: 6px;
  /* transform:translateX(-50%) */
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
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
    border-bottom-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
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
