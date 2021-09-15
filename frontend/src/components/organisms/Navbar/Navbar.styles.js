import styled from "styled-components"
import { Link } from "gatsby"
import { AiOutlineMenu } from "react-icons/ai"

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 7rem;
  background-color: #f3f3f3;
  z-index: 1000;
`

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1920px) {
    padding: 0 2rem;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

  @media only screen and (max-width: 767px) {
    display: none;
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
