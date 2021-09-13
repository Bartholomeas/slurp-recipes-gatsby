import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FilterWrapper,
  FilterHeader,
  FilterContainer,
} from "./FilterBar.styles"
import SearchBar from "../../molecules/SearchBar/SearchBar"
import FilterOptionsBody from "../../molecules/FilterOptionsBody/FilterOptionsBody"

const FilterBar = () => {
  const data = useStaticQuery(graphql`
    query Difficulties {
      allStrapiDifficulties {
        nodes {
          difficulty
        }
      }
    }
  `)
  console.log(data)

  return (
    <FilterWrapper>
      <FilterHeader>filters</FilterHeader>
      <FilterContainer>
        <SearchBar />
        <FilterOptionsBody />
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
