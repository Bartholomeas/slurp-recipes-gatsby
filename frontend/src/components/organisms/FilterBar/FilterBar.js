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
    query Filters {
      allStrapiDifficulties {
        nodes {
          difficulty
        }
      }
      allStrapiTypes {
        nodes {
          types
        }
      }
      allStrapiDiets {
        nodes {
          diet
        }
      }
    }
  `)
  console.log(data)
  const diets = data.allStrapiDiets.nodes
  const difficulties = data.allStrapiDifficulties.nodes
  const types = data.allStrapiTypes.nodes

  return (
    <FilterWrapper>
      <FilterHeader>filters</FilterHeader>
      <FilterContainer>
        <SearchBar />
        <FilterOptionsBody content={diets} />
        <FilterOptionsBody content={difficulties} />
        <FilterOptionsBody content={types} />
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
