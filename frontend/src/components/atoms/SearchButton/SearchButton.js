import React from "react"
import { AiOutlineKey } from "react-icons/ai"
import styled from "styled-components"

const SearchIcon = styled(AiOutlineKey)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`
const Button = styled.button`
  position: relative;
  height: 100%;
  padding: 0 1rem;
  border: none;
  background: none;
  cursor: pointer;
`

export const SearchButton = () => {
  return (
    <Button type="submit" onClick={e => e.preventDefault()}>
      <SearchIcon />
    </Button>
  )
}
