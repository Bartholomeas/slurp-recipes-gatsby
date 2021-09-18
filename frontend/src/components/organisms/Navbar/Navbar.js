import React, { useState } from "react"
import {
  NavContainer,
  NavWrapper,
  Logo,
  LinkContainer,
  NavLink,
  HamburgerBtn,
} from "./Navbar.styles"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavWrapper>
      <NavContainer>
        <Logo>s:urp</Logo>
        <HamburgerBtn onClick={() => setIsOpen(!isOpen)} />
        <LinkContainer isOpen={isOpen}>
          <NavLink className="bold" to="/">
            converter
          </NavLink>
          <NavLink to="/">recipes</NavLink>
          <NavLink to="/shop">shop</NavLink>
          <NavLink to="/tips">tips&tricks</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </LinkContainer>
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
