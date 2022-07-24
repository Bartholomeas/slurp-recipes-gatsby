import React from "react"
import styled from "styled-components"
import { TbSearch } from "react-icons/tb"

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};
  box-shadow: ${({ theme }) => theme.otherStyles.shadow};

  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }

  & svg {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`
// const SearchForm = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
// `
const SearchLabel = styled.label`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

const SearchArea = styled.input`
  padding: 0.8rem;
  border: none;
  background: none;
  width: 100%;
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius};

  /* width: 100%;
  height: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.otherStyles.bigRadius}; */

  &:focus ${SearchWrapper} {
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    background-color: pink;
    outline: 1px solid lightgrey;
  }
`

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchLabel htmlFor="search-bar">Skopiuj adres strony</SearchLabel>
      <TbSearch />
      <SearchArea
        placeholder="Znajdź przepis.."
        name="search-bar"
        id="search-bar"
      />
    </SearchWrapper>
  )
}

export default SearchBar
