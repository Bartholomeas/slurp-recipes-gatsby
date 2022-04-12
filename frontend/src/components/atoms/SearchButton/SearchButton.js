import React from "react"
import styled from "styled-components"
import { AiOutlineCopy } from "react-icons/ai"

const SearchIcon = styled(AiOutlineCopy)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
const Button = styled.button`
  position: relative;
  height: 100%;
  padding: 0 1rem;
  border: none;
  background: none;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 0 6px 6px 0;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerPrimary};
  }
`

export const SearchButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <SearchIcon />
    </Button>
  )
}
