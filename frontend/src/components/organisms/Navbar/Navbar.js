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
          <ListButton
            onClick={() => {
              setIsActive(!isActive)
              setIsOpen(false)
            }}
          >
            <ListIcon />
          </ListButton>
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
          <SignUpLink onClick={() => setIsOpen(false)} to="/tips">
            Sign up
          </SignUpLink>
        </LinkContainer>
        <Converter setIsActive={setIsActive} isActive={isActive} />
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
