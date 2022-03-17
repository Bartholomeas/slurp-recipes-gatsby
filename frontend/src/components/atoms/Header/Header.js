import React from "react"
import styled from "styled-components"

const Heading = styled.h1`
  position: relative;
  align-self: center;
  justify-self: start;
  font-size: 3rem;
  font-weight: bold;
  margin: 4rem 0;
  color: ${({ theme }) => theme.colors.darkerPrimary};

  &::after {
    content: "";
    position: absolute;
    height: 2rem;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -100;
    background-color: ${({ theme }) => theme.colors.lightGrey};
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
