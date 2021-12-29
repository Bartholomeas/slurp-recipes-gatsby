import React, { useState, useContext, useEffect } from "react"
import Converter from "../Converter/Converter"
import {
  NavContainer,
  NavWrapper,
  Logo,
  LinkContainer,
  NavLink,
  UserButton,
  HamburgerBtn,
  ListIcon,
  ListButton,
} from "./Navbar.styles"
import { StateContext } from "../../../context/StateContext"
import { FaUserCircle } from "react-icons/fa"
import UserPanel from "../UserPanel/UserPanel"

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isConverterActive, setIsConverterActive] = useState(false)
  const [isUserPanelActive, setIsUserPanelActive] = useState(false)
  const { isAuthenticated, setIsAuthenticated } = useContext(StateContext)

  let userName = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  })

  return (
    <NavWrapper>
      <NavContainer>
        <Logo>s:urp</Logo>
        <HamburgerBtn
          aria-label="Open mobile menu"
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen)
            setIsUserPanelActive(false)
          }}
        />
        <LinkContainer isNavbarOpen={isNavbarOpen}>
          <ListButton
            onClick={() => {
              setIsConverterActive(!isConverterActive)
              setIsNavbarOpen(false)
            }}
          >
            <ListIcon />
          </ListButton>
          <NavLink
            onClick={() => setIsNavbarOpen(false)}
            to="/"
            activeStyle={{ color: "#A41A1A" }}
          >
            recipes
          </NavLink>

          <NavLink
            onClick={() => setIsNavbarOpen(false)}
            to="/contact"
            activeStyle={{ color: "#A41A1A" }}
          >
            contact
          </NavLink>

          {isAuthenticated ? (
            <UserButton
              className="join-link"
              onClick={() => {
                {
                  setIsUserPanelActive(!isUserPanelActive)
                  setIsNavbarOpen(false)
                }
              }}
            >
              <FaUserCircle
                className="join-icon"
                onClick={() => setIsNavbarOpen(false)}
              />{" "}
              {userName}
            </UserButton>
          ) : (
            <NavLink
              to="/login"
              className="join-link"
              onClick={() => setIsNavbarOpen(false)}
            >
              <FaUserCircle className="join-icon" /> join now
            </NavLink>
          )}
        </LinkContainer>
        <UserPanel
          isUserPanelActive={isUserPanelActive}
          setIsUserPanelActive={setIsUserPanelActive}
        />
        <Converter
          setIsConverterActive={setIsConverterActive}
          isConverterActive={isConverterActive}
        />
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
