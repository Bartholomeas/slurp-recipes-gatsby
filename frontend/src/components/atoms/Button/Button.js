import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  position: relative;
  padding: 1rem 1.4rem;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.lightFont};
  background-color: ${({ theme }) => theme.colors.baseColor};
  font-size: 2rem;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBase};
  }
`

const Button = ({ content, className, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} className={className}>
      {content}
    </ButtonWrapper>
  )
}

export default Button
