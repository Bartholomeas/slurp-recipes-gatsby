import React, { useState } from "react"
import Converter from "../Converter/Converter"
import {
  NavContainer,
  NavWrapper,
  Logo,
  LinkContainer,
  NavLink,
  SignUpLink,
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
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            activeStyle={{ color: "#A41A1A" }}
          >
            recipes
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/tips"
            activeStyle={{ color: "#A41A1A" }}
          >
            tips&tricks
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/contact"
            activeStyle={{ color: "#A41A1A" }}
          >
            contact
          </NavLink>
          <ListButton
            onClick={() => {
              setIsActive(!isActive)
              setIsOpen(false)
            }}
          >
            <ListIcon />
          </ListButton>
          <SignUpLink onClick={() => setIsOpen(false)} to="/tips">
            Login / Register
          </SignUpLink>
        </LinkContainer>
        <Converter setIsActive={setIsActive} isActive={isActive} />
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
