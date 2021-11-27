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
    color: ${({ theme }) => theme.colors.baseColor};
  }
`

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
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
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1920px) {
    padding: 0 2rem;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .join-icon {
    /* position: absolute; */
    /* left: -3rem; */
    font-size: 2.5rem;
    margin-right: 1rem;
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
    transform: translateY(
      ${({ isNavbarOpen }) => (isNavbarOpen ? "0" : "-100%")}
    );
    max-height: ${({ isNavbarOpen }) => (isNavbarOpen ? "100vh" : "0")};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: transform 0.3s, max-height 0.6s;
    overflow: hidden;
    z-index: -10;
  } ;
`
export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 300;
  transition: color 0.3s;

  &.join-link {
    ${joinLinkStyles}
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.baseColor};
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

export const Logo = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.darkerBase};
`

export const ListIcon = styled(RiFileList3Line)`
  color: ${({ theme }) => theme.colors.baseColor};
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
