import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { uiActions } from "../../../store/uiSlice"
import Converter from "../Converter/Converter"

import {
  NavContainer,
  NavWrapper,
  LinkContainer,
  LogoLink,
  NavLink,
  UserButton,
  HamburgerBtn,
  NavListItem,
} from "./Navbar.styles"
import BorderButton from "../../atoms/BorderButton/BorderButton"
import UserPanel from "../UserPanel/UserPanel"
import Logo from "../../atoms/Logo/Logo"
import Button from "../../atoms/Button/Button"

const Navbar = () => {
  const dispatch = useDispatch()
  const [isAuthenticated, setAuthentication] = useState(false)
  const { navbarStatus, userPanelStatus, converterStatus } = useSelector(
    state => state.ui
  )

  const windowGlobal = typeof window !== "undefined" && window

  let userName = windowGlobal
    ? JSON.parse(windowGlobal.localStorage.getItem("user"))
    : null

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthentication(true)
    } else {
      setAuthentication(false)
    }
  })

  const closeNavbar = () => {
    dispatch(uiActions.toggleNavbar(false))
  }

  const closeConverter = () => {
    dispatch(uiActions.toggleConverter(false))
  }

  const toggleUserPanel = (close = false) => {
    if (close) {
      dispatch(uiActions.toggleUserPanel(close))
      return
    }
    dispatch(uiActions.toggleUserPanel())
  }

  return (
    <NavWrapper>
      <NavContainer>
        <LogoLink style={{ height: "40px" }} to="/" aria-label="Logo strony">
          <Logo style={{ height: "100%" }} />
        </LogoLink>
        <HamburgerBtn
          aria-label="Open mobile menu"
          onClick={() => {
            dispatch(uiActions.toggleNavbar())
            toggleUserPanel(true)
          }}
        />
        <LinkContainer isNavbarOpen={navbarStatus}>
          <NavListItem>
            <NavLink
              onClick={closeNavbar}
              to="/"
              activeStyle={{ color: "#F94C66", fontWeight: "700" }}
            >
              przepisy
            </NavLink>
          </NavListItem>

          <NavListItem>
            <NavLink
              onClick={closeNavbar}
              to="/contact"
              activeStyle={{ color: "#F94C66", fontWeight: "700" }}
            >
              kontakt
            </NavLink>
          </NavListItem>
          <NavListItem>
            <BorderButton
              onClick={() => {
                dispatch(uiActions.toggleConverter(false))
                closeNavbar()
              }}
              data-testid="converter-icon"
            >
              Konwerter
            </BorderButton>
          </NavListItem>
          <NavListItem>
            {isAuthenticated ? (
              <UserButton
                className="join-link"
                onClick={() => {
                  dispatch(uiActions.toggleUserPanel())
                  closeNavbar()
                }}
              >
                {userName}
              </UserButton>
            ) : (
              <NavLink to="/login" className="join-link" onClick={closeNavbar}>
                <Button isLong={true}>Dołącz</Button>
              </NavLink>
            )}
          </NavListItem>
        </LinkContainer>
        <UserPanel
          isUserPanelActive={userPanelStatus}
          setIsUserPanelActive={toggleUserPanel}
        />
        <Converter
          closeConverter={closeConverter}
          isConverterActive={converterStatus}
        />
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
