import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  width: ${({ isLong }) => (isLong ? "100%" : "auto")};
  padding: 1.2rem 2.4rem;
  margin: 1.6rem 0;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
  font-size: 1.4rem;
  font-weight: 700;
  transition: 0.3s background-color;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkAccent};
  }
`

const Button = ({ children, isLong = false, className, onClick }) => {
  return (
    <ButtonWrapper isLong={isLong} onClick={onClick} className={className}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
