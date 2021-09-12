import React from "react"
import styled from "styled-components"
import { SearchButton } from "../../atoms/SearchButton/SearchButton"

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`

const SearchLabel = styled.label`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.baseColor};
`

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  width: 10rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  border: none;

  &:focus {
    border: none;
    outline: 1px solid lightgrey;
  }
`

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchLabel htmlFor="search-bar">search recipes</SearchLabel>
      <SearchForm>
        <SearchInput name="search-bar" id="search-bar" />
        <SearchButton />
      </SearchForm>
    </SearchWrapper>
  )
}

export default SearchBar
