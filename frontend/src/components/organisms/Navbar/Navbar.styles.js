import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { AiOutlineMenu } from "react-icons/ai"

const joinLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  font-size: 1.6rem;

  &:hover {
    color: ${({ theme }) => theme.colors.base};
  }
`
const navLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* padding: 2rem; */
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 500;
  transition: color 0.3s;
`

export const NavWrapper = styled.nav`
  position: fixed;
  font-family: "Poppins", sans-serif;
  top: 0;
  min-width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10000;

  @media print {
    display: none;
  }
`

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.otherStyles.maxWidth};
  height: 100%;
  margin: 0 auto;

  /* padding: 0 2rem; */

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
  /* background-color: skyblue; */

  & .join-icon {
    font-size: 2.4rem;
    margin-right: 0.4rem;
  }

  &.join-link {
    ${joinLinkStyles}
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    padding: 4rem 0;
    transform: scale(${({ isNavbarOpen }) => (isNavbarOpen ? "1" : "0")});
    transform-origin: top right;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: transform 0.2s;
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

  @media only screen and(min-width:768px) {
    width: auto;
  }
`

export const NavLink = styled(Link)`
  ${navLinkStyles}
  /* background-color:pink; */
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

export const ConverterButton = styled.button``

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ListButton = styled.button`
  ${navLinkStyles}
  gap:.6rem;
  background: none;
  border: ${({ theme }) => theme.otherStyles.border};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
  z-index: 1000;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.base};
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
