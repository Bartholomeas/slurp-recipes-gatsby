import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 7rem;
  background-color: #f3f3f3;
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  width: 100%;
  padding: 0 4rem;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
  }
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 300;
  transition: color 0.3s;

  &.bold {
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.baseColor};
  }
`

const Logo = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.baseColor};
`

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo>s:urp</Logo>
        <LinkContainer>
          <NavLink className="bold" to="/">
            converter
          </NavLink>
          <NavLink to="/">recipes</NavLink>
          <NavLink to="/shop">shop</NavLink>
          <NavLink to="/tips">tips&tricks</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </LinkContainer>
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar
