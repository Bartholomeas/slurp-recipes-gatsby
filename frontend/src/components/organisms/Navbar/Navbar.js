import React, { useState, useContext, useEffect } from "react"
import Converter from "../Converter/Converter"
import {
  NavContainer,
  NavWrapper,
  Logo,
  LinkContainer,
  NavLink,
  SignInLink,
  HamburgerBtn,
  ListIcon,
  ListButton,
} from "./Navbar.styles"
import { StateContext } from "../../../context/StateContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { isAuthenticated, setIsAuthenticated } = useContext(StateContext)

  useEffect(() => {
    console.log("USEEFFET")
    if (JSON.parse(localStorage.getItem("token"))) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])
  console.log(isAuthenticated)

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
          {isAuthenticated ? (
            <SignInLink to="/adminpanel">
              welcome {JSON.parse(localStorage.getItem("user"))}
            </SignInLink>
          ) : (
            <SignInLink onClick={() => setIsOpen(false)} to="/login">
              sign in
            </SignInLink>
          )}
        </LinkContainer>
        <Converter setIsActive={setIsActive} isActive={isActive} />
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
