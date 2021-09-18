import styled from "styled-components"
import { Link } from "gatsby"
import { AiOutlineMenu } from "react-icons/ai"

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  z-index: 1000;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1920px;
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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    overflow: hidden;
    width: 100%;
  } ;
`
export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 300;
  transition: color 0.3s;

  &.bold {
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.baseColor};
  }
`

export const Logo = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.baseColor};
`

export const HamburgerBtn = styled(AiOutlineMenu)`
  display: block;
  font-size: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontColor};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
