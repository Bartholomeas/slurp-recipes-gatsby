import React, { useContext } from "react"
import { Wrapper, NavbarLink, Button } from "./UserPanel.styles"
import { FaPlusCircle } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa"
import { FaCog } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { StateContext } from "../../../context/StateContext"

const UserPanel = ({ isUserPanelActive, setIsUserPanelActive }) => {
  const { isModalOpen, setIsModalOpen } = useContext(StateContext)

  const logoutHandler = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <Wrapper isUserPanelActive={isUserPanelActive}>
      <NavbarLink
        onClick={() => {
          setIsModalOpen(!isModalOpen)
        }}
        className="user-panel-item"
        to="#"
      >
        <FaPlusCircle className="navbar-icon" />
        add recipe
      </NavbarLink>
      <NavbarLink className="user-panel-item" to="#">
        <FaHeart className="navbar-icon" />
        favorite
      </NavbarLink>
      <NavbarLink className="user-panel-item" to="#">
        <FaCog className="navbar-icon" />
        settings
      </NavbarLink>
      <Button onClick={() => logoutHandler()} className="user-panel-item">
        <FaSignInAlt className="navbar-icon" />
        logout
      </Button>
    </Wrapper>
  )
}

export default UserPanel
