import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { FaPlusCircle } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"

const iconStyles = css`
  font-size: 3rem;
`

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.baseColor};
  color: red;
  z-index: 1000;

  & .navbarIcon {
    ${iconStyles}
  }
`
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightFont};
`

const Username = styled.span``

const Button = styled.button`
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  border: none;
  cursor: pointer;
`

const UserNavbar = () => {
  return (
    <Wrapper>
      <NavbarLink to="/">
        <FaUserCircle className="navbarIcon" />
        welcome <Username>bartholomeas</Username>
      </NavbarLink>
      <NavbarLink to="#">admin panel</NavbarLink>
      <NavbarLink to="#">
        <FaPlusCircle className="navbarIcon" />
        add recipe
      </NavbarLink>
      <NavbarLink to="#">login</NavbarLink>
      <Button>
        <FaSignInAlt className="navbarIcon" />
        logout
      </Button>
    </Wrapper>
  )
}

export default UserNavbar
