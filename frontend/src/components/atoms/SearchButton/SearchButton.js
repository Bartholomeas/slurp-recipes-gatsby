import React from "react"
import { AiOutlineKey } from "react-icons/ai"
import styled from "styled-components"

const SearchIcon = styled(AiOutlineKey)`
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

export const SearchButton = () => {
  return (
    <Button type="submit" onClick={e => e.preventDefault()}>
      <SearchIcon />
    </Button>
  )
}
