import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 2.4rem 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  & p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.standard};
    color: ${({ theme }) => theme.colors.fontColor};
  }
`

const FoundRecipe = ({ title = "" }) => {
  return (
    <CardLink to={`/${title.toLowerCase().replace(/\s/g, "_")}`}>
      <p>{title}</p>
    </CardLink>
  )
}

export default FoundRecipe
