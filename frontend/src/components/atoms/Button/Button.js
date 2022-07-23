import React from "react"
import styled, { css } from "styled-components"

const ButtonWrapper = styled.button`
  width: ${({ isLong }) => (isLong ? "100%" : "auto")};
  padding: 1.2rem 2.4rem;
  margin: 1.6rem 0;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  background-color: ${({ accentColor, theme }) =>
    accentColor ? theme.colors.accent : theme.colors.base};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
  font-size: 1.4rem;
  font-weight: 700;
  transition: 0.3s background-color;
  cursor: pointer;

  &:hover {
    background-color: ${({ accentColor, theme }) =>
      accentColor ? theme.colors.darkAccent : theme.colors.darkBase};
  }
`

const Button = ({
  children,
  isLong = false,
  accentColor = false,
  className,
  onClick,
}) => {
  return (
    <ButtonWrapper
      isLong={isLong}
      accentColor={accentColor}
      onClick={onClick}
      className={className}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
