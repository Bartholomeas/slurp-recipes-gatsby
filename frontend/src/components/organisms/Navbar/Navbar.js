import React, { useState, useContext, useEffect } from "react"
import Converter from "../Converter/Converter"
import {
  NavContainer,
  NavWrapper,
  LinkContainer,
  LogoLink,
  NavLink,
  UserButton,
  HamburgerBtn,
  ListButton,
  NavListItem,
} from "./Navbar.styles"
import { StateContext } from "../../../context/StateContext"
import { FiLogIn } from "react-icons/fi"
import { BiUserCircle, BiRepost } from "react-icons/bi"
import UserPanel from "../UserPanel/UserPanel"
import Logo from "../../atoms/Logo/Logo"

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isConverterActive, setIsConverterActive] = useState(false)
  const [isUserPanelActive, setIsUserPanelActive] = useState(false)
  const { isAuthenticated, setIsAuthenticated } = useContext(StateContext)
  const windowGlobal = typeof window !== "undefined" && window

  let userName = windowGlobal
    ? JSON.parse(windowGlobal.localStorage.getItem("user"))
    : null

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
        <LogoLink style={{ height: "100px" }} to="/" aria-label="Logo strony">
          <Logo style={{ height: "100%" }} />
        </LogoLink>
        <HamburgerBtn
          aria-label="Open mobile menu"
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen)
            setIsUserPanelActive(false)
          }}
        />
        <LinkContainer isNavbarOpen={isNavbarOpen}>
          <NavListItem>
            <ListButton
              onClick={() => {
                setIsConverterActive(!isConverterActive)
                setIsNavbarOpen(false)
              }}
              data-testid="converter-icon"
            >
              <BiRepost style={{ fontSize: "2.4rem" }} />
              konwerter
            </ListButton>
          </NavListItem>
          <NavListItem>
            <NavLink
              onClick={() => setIsNavbarOpen(false)}
              to="/"
              activeStyle={{ color: "#F2B61A", fontWeight: "700" }}
            >
              przepisy
            </NavLink>
          </NavListItem>

          <NavListItem>
            <NavLink
              onClick={() => setIsNavbarOpen(false)}
              to="/contact"
              activeStyle={{ color: "#F2B61A", fontWeight: "700" }}
            >
              kontakt
            </NavLink>
          </NavListItem>
          <NavListItem>
            {isAuthenticated ? (
              <UserButton
                className="join-link"
                onClick={() => {
                  setIsUserPanelActive(!isUserPanelActive)
                  setIsNavbarOpen(false)
                }}
              >
                <BiUserCircle
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
                <FiLogIn className="join-icon" /> Dołącz
              </NavLink>
            )}
          </NavListItem>
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
