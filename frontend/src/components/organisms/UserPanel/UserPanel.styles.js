import styled, { css } from "styled-components"
import { Link } from "gatsby"

const iconStyles = css`
  font-size: 2rem;
`

export const Wrapper = styled.div`
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
  border-radius: 6px;
  z-index: 1000;

  & .modal-body {
    background-color: gold;
  }

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
    font-size: 1.6rem;
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
export const NavbarLink = styled(Link)`
  text-decoration: none;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  border: none;
  cursor: pointer;
`
