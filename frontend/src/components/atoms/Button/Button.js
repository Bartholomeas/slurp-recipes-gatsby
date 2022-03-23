import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  width: ${({ isLong }) => (isLong ? "100%" : "auto")};
  padding: 0.8rem 1.6rem;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.lightFont};
  border-radius: 6px;
  font-size: 1.4rem;
  transition: 0.3s background-color;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
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
