import React from "react"
import styled from "styled-components"

const Heading = styled.h1`
  position: relative;
  align-self: center;
  justify-self: start;
  font-size: 3rem;
  font-weight: 300;
  margin: 4rem 0;
  color: ${({ theme }) => theme.colors.fontColor};

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 3rem;
    top: 50%;
    background-color: ${({ theme }) => theme.colors.baseColor};
  }

  &::before {
    left: -5rem;
  }
  &::after {
    right: -5rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 5rem;
  }
`

const Header = ({ content }) => {
  return (
    <>
      <Heading>{content.toLowerCase()}</Heading>
    </>
  )
}

export default Header
