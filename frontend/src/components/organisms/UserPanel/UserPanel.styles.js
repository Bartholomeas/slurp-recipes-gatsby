import styled, { css } from "styled-components"
import { Link } from "gatsby"

const iconStyles = css`
  font-size: 2rem;
`

export const Wrapper = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 7rem;
  right: 0;
  width: 100%;
  min-height: 150px;
  padding: 1rem 1.6rem;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.otherStyles.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  transform: scale(
    ${({ isUserPanelActive }) => (isUserPanelActive ? "1" : "0")}
  );
  transform-origin: top right;
  transition: transform 0.2s ease-in-out;
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
      color: ${({ theme }) => theme.colors.base};
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
