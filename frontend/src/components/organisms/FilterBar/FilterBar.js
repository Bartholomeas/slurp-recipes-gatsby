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
  // const data = useStaticQuery(graphql`
  //   query Difficulties {
  //     allStrapiDifficulties {
  //       nodes {
  //         difficulty
  //       }
  //     }
  //   }
  // `)
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
    }
  `)
  console.log(data)
  const difficulties = data.allStrapiDifficulties.nodes
  const types = data.allStrapiTypes.nodes

  return (
    <FilterWrapper>
      <FilterHeader>filters</FilterHeader>
      <FilterContainer>
        <SearchBar />
        <FilterOptionsBody content={difficulties} />
        <FilterOptionsBody content={difficulties} />
        <FilterOptionsBody content={types} />
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
