import React from "react"
import styled from "styled-components"
import { TbSearch } from "react-icons/tb"

const Button = styled.button`
  position: relative;
  height: 100%;
  padding: 0 1rem;
  height: 3rem;
  border: none;
  background: none;
  border-radius: 0 6px 6px 0;
  transition: background-color 0.2s;
  cursor: pointer;

  & icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`

export const SearchButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {/* WYWAL */}
    </Button>
  )
}
