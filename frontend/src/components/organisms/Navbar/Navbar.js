import React from "react"
import {
  NavContainer,
  NavWrapper,
  Logo,
  LinkContainer,
  NavLink,
  HamburgerBtn,
} from "./Navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo>s:urp</Logo>
        <LinkContainer>
        <HamburgerBtn />
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
