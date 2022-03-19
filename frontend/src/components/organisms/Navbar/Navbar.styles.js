import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { AiOutlineMenu } from "react-icons/ai"
import { RiFileList3Line } from "react-icons/ri"

const joinLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  font-size: 1.6rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`

export const NavWrapper = styled.nav`
  position: fixed;
  font-family: "Poppins", sans-serif;
  top: 0;
  min-width: 100%;
  height: 7rem;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  z-index: 10000;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.shadow};

  @media print {
    display: none;
  }
`

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1920px) {
    padding: 0 2rem;
  }
`

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
  list-style: none;

  & .join-icon {
    font-size: 2.4rem;
    margin-right: 1rem;
  }

  &.join-link {
    ${joinLinkStyles}
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    padding: 4rem 0;
    transform: scale(${({ isNavbarOpen }) => (isNavbarOpen ? "1" : "0")});
    transform-origin: top;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: transform 0.3s;
    overflow: hidden;
    z-index: -10;
  } ;
`
export const NavListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    bottom: 0;
    transform: scale(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }
  &:hover&::before {
    transform: scale(1);
  }

  @media only screen and(min-width:768px) {
    width: auto;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s;

  &.join-link {
    ${joinLinkStyles}
  }
`
export const UserButton = styled.button`
  ${joinLinkStyles}
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;
`

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.darkerPrimary};
`

export const ListIcon = styled(RiFileList3Line)`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 2rem;
  cursor: pointer;
`
export const ListButton = styled.button`
  position: relative;
  padding: 0 1rem;
  margin-right: 1.6rem;
  background: none;
  border: none;
  z-index: 1000;

  &:hover ${ListIcon} {
    transform: scale(1.2);
  }
`

export const HamburgerBtn = styled(AiOutlineMenu)`
  position: absolute;
  right: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 3rem;
  cursor: pointer;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`
