import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  width: ${({ isLong }) => (isLong ? "100%" : "auto")};
  padding: 1rem 1.4rem;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.lightFont};
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 2rem;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondarySupport};
  }
`

const Button = ({ isLong = false, content, className, onClick }) => {
  return (
    <ButtonWrapper isLong={isLong} onClick={onClick} className={className}>
      {content}
    </ButtonWrapper>
  )
}

export default Button
