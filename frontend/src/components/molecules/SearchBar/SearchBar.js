import React from "react"
import styled from "styled-components"
import { SearchButton } from "../../atoms/SearchButton/SearchButton"

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  width: 100%;

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
`
// const SearchLabel = styled.label`
//   font-size: 1rem;
//   color: ${({ theme }) => theme.colors.fontColor};
// `

const SearchArea = styled.input`
  padding: 0.8rem;
  width: 100%;
  height: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px 0 0 6px;
  border: none;

  &:focus {
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    outline: 1px solid lightgrey;
  }
`

const SearchBar = () => {
  const copyToClipboard = str => {
    console.log(str)
    navigator.clipboard.writeText(str)
  }

  return (
    <SearchWrapper>
      {/* <SearchLabel htmlFor="search-bar">Skopiuj adres strony</SearchLabel> */}
      <SearchForm>
        <SearchArea
          name="search-bar"
          id="search-bar"
          defaultValue={window.location.href}
        />
        <SearchButton onClick={() => copyToClipboard(window.location.href)} />
      </SearchForm>
    </SearchWrapper>
  )
}

export default SearchBar
