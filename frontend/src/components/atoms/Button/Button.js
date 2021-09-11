import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  position: relative;
  padding: 1rem 1.4rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 2rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    left: 0;
    width: 100%;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.baseColor};
    z-index: -1;
    transition: height 0.3s;
  }

  &:hover&::before {
    height: 100%;
  }
`

const Button = ({ content }) => {
  return <ButtonWrapper>{content}</ButtonWrapper>
}

export default Button
