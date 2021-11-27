import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { FaPlusCircle } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa"
import { FaCog } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

const iconStyles = css`
  font-size: 2rem;
`

const Wrapper = styled.div`
  position: absolute;
  display: ${({ isUserPanelActive }) => (isUserPanelActive ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 7rem;
  right: 0;
  width: 100%;
  min-height: 200px;
  padding: 1rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  box-shadow: 0 8px 8px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  z-index: 1000;

  & .navbar-icon {
    ${iconStyles}
    font-size:2rem;
    margin-left: 1rem;
  }

  & .user-panel-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 0.6rem 1rem;
    margin-bottom: 1.8rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.fontColor};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.baseColor};
      transform: scale(1.01);
    }
    @media only screen and (min-width: 768px) {
      justify-content: flex-start;
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
  }
`
const NavbarLink = styled(Link)`
  text-decoration: none;
`

const Button = styled.button`
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  border: none;
  cursor: pointer;
`
const ModalBackground = styled.div`
  display: ${({ isModalActive }) => (isModalActive ? "block" : "none")};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`

const Modal = styled.div`
  display: ${({ isModalActive }) => (isModalActive ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  height: 800px;
  width: 500px;
  background-color: lightgrey;
  transform: translate(-50%, -50%);
`

const UserPanel = ({ isUserPanelActive, setIsUserPanelActive }) => {
  const [isModalActive, toggleModalActive] = useState(false)

  const logoutHandler = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <>
      <ModalBackground isModalActive={isModalActive}>
        <Modal></Modal>
      </ModalBackground>
      <Wrapper isUserPanelActive={isUserPanelActive}>
        <NavbarLink className="user-panel-item" to="/addrecipe">
          <FaPlusCircle
            onClick={() => {
              toggleModalActive(true)
            }}
            className="navbar-icon"
          />
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
    </>
  )
}

export default UserPanel
