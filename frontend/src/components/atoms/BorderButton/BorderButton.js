import React from "react"
import styled, { css } from "styled-components"

const ButtonWrapper = styled.button`
  width: ${({ isLong }) => (isLong ? "100%" : "auto")};
  padding: 1.2rem 2.4rem;
  margin: 1.6rem 0;
  color: ${({ theme }) => theme.colors.base};
  border: ${({ theme }) => theme.otherStyles.border};
  background: none;
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
  font-size: 1.4rem;
  font-weight: 700;
  transition: 0.3s background-color;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.base};
    color: ${({ theme }) => theme.colors.white};
  }
`

const BorderButton = ({ children, isLong = false, onClick }) => {
  return (
    <ButtonWrapper isLong={isLong} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

export default BorderButton
