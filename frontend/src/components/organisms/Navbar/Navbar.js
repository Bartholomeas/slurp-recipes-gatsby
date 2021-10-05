import React, { useState } from "react"
import Converter from "../Converter/Converter"
import {
  NavContainer,
  NavWrapper,
  Logo,
  LinkContainer,
  NavLink,
  HamburgerBtn,
  ListIcon,
  ListButton,
} from "./Navbar.styles"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <NavWrapper>
      <NavContainer>
        <Logo>s:urp</Logo>
        <HamburgerBtn
          aria-label="Open mobile menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <LinkContainer isOpen={isOpen}>
          <NavLink to="/" activeStyle={{ color: "#A41A1A" }}>
            recipes
          </NavLink>
          <NavLink to="/tips" activeStyle={{ color: "#A41A1A" }}>
            tips&tricks
          </NavLink>
          <NavLink to="/contact" activeStyle={{ color: "#A41A1A" }}>
            contact
          </NavLink>
          <ListButton onClick={() => setIsActive(!isActive)}>
            <ListIcon />
          </ListButton>
        </LinkContainer>
        <Converter isActive={isActive} />
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
