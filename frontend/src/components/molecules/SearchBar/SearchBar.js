import React from "react"
import styled from "styled-components"
import { SearchButton } from "../../atoms/SearchButton/SearchButton"

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2.4rem;

  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
`

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  gap: 1rem;
`

const SearchLabel = styled.label`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`

const SearchInput = styled.input`
  padding: 1rem 1.6rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px 0 0 6px;
  border: none;

  &:focus {
    border: none;
    background-color: ${({ theme }) => theme.colors.grey};
    outline: 1px solid lightgrey;
  }
`

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchLabel htmlFor="search-bar">Wyszukaj przepisów</SearchLabel>
      <SearchForm>
        <SearchInput name="search-bar" id="search-bar" />
        <SearchButton />
      </SearchForm>
    </SearchWrapper>
  )
}

export default SearchBar
