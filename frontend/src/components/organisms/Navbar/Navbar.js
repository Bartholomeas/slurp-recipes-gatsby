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
        <HamburgerBtn
          aria-label="Open mobile menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <LinkContainer isOpen={isOpen}>
          <NavLink className="bold" to="/">
            converter
          </NavLink>
          <NavLink to="/" activeStyle={{ color: "#A41A1A" }}>
            recipes
          </NavLink>
          <NavLink to="/shop" activeStyle={{ color: "#A41A1A" }}>
            shop
          </NavLink>
          <NavLink to="/tips" activeStyle={{ color: "#A41A1A" }}>
            tips&tricks
          </NavLink>
          <NavLink to="/contact" activeStyle={{ color: "#A41A1A" }}>
            contact
          </NavLink>
        </LinkContainer>
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
