import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import addIcon from "../../../assets/addIcon.svg"
import avatar from "../../../assets/avatar.svg"
import logout from "../../../assets/logout.svg"

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  z-index: 1000;
`
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fontColor};
`

const Username = styled.span``

const Button = styled.button`
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  border: none;
  cursor: pointer;
`
const Icon = styled.i``

const UserNavbar = () => {
  return (
    <Wrapper>
      <NavbarLink to="/">
        welcome <Username>bartholomeas</Username>
      </NavbarLink>
      <Icon src={avatar} />
      <NavbarLink to="#">admin panel</NavbarLink>
      <NavbarLink to="#">add recipe</NavbarLink>
      <NavbarLink to="#">login</NavbarLink>
      <Button>logout</Button>
    </Wrapper>
  )
}

export default UserNavbar
