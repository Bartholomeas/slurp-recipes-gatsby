import React from "react"
import { Wrapper, NavbarLink, Button } from "./UserPanel.styles"
import { FaPlusCircle } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa"
import { FaCogs } from "react-icons/fa"

const UserPanel = ({ isUserPanelActive, setIsUserPanelActive }) => {
  const windowGlobal = typeof window !== "undefined" && window
  const logoutHandler = () => {
    windowGlobal.localStorage.removeItem("token")
    windowGlobal.localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <Wrapper
      onClick={() => setIsUserPanelActive(true)}
      isUserPanelActive={isUserPanelActive}
    >
      <NavbarLink
        onClick={() => setIsUserPanelActive(true)}
        className="user-panel-item"
        to="/addRecipe"
      >
        <FaPlusCircle className="navbar-icon" />
        Dodaj przepis
      </NavbarLink>
      {/*<NavbarLink className="user-panel-item" to="/settings">*/}
      {/*  <FaCogs className="navbar-icon" />*/}
      {/*  Ustawienia*/}
      {/*</NavbarLink>*/}
      <Button onClick={() => logoutHandler()} className="user-panel-item">
        <FaSignInAlt className="navbar-icon" />
        Wyloguj
      </Button>
    </Wrapper>
  )
}

export default UserPanel
