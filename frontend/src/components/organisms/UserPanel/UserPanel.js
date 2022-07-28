import React, { useContext } from "react"
import { Wrapper, NavbarLink, Button } from "./UserPanel.styles"
import { FaPlusCircle } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { StateContext } from "../../../context/StateContext"

const UserPanel = ({ isUserPanelActive, setIsUserPanelActive }) => {
  const windowGlobal = typeof window !== "undefined" && window
  const logoutHandler = () => {
    windowGlobal.localStorage.removeItem("token")
    windowGlobal.localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <Wrapper
      onClick={e => {
        setIsUserPanelActive(!isUserPanelActive)
      }}
      isUserPanelActive={isUserPanelActive}
    >
      <NavbarLink
        onClick={() => {
          setIsUserPanelActive(!isUserPanelActive)
        }}
        className="user-panel-item"
        to="/addRecipe"
      >
        <FaPlusCircle className="navbar-icon" />
        Dodaj przepis
      </NavbarLink>
      <NavbarLink className="user-panel-item" to="#">
        <FaHeart className="navbar-icon" />
        Ulubione
      </NavbarLink>
      <Button onClick={() => logoutHandler()} className="user-panel-item">
        <FaSignInAlt className="navbar-icon" />
        Wyloguj
      </Button>
    </Wrapper>
  )
}

export default UserPanel
