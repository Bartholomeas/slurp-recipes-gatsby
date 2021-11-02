import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FilterWrapper,
  FilterHeader,
  FilterContainer,
  ClearButton,
} from "./FilterBar.styles"
import SearchBar from "../../molecules/SearchBar/SearchBar"
import FilterOptionsBody from "../../molecules/FilterOptionsBody/FilterOptionsBody"
import Button from "../../atoms/Button/Button"
import { StateContext } from "../../../context/StateContext"

const FilterBar = ({ isOpen }) => {
  const data = useStaticQuery(graphql`
    query Filters {
      allStrapiDifficulties {
        nodes {
          difficulties
        }
      }
      allStrapiTypes {
        nodes {
          types
        }
      }
      allStrapiDiets {
        nodes {
          diets
        }
      }
    }
  `)

  const diets = data.allStrapiDiets.nodes
  const difficulties = data.allStrapiDifficulties.nodes
  const types = data.allStrapiTypes.nodes

  const { setInfo } = useContext(StateContext)

  const initialState = {
    diets: "",
    difficulties: "",
    types: "",
  }

  const clearState = () => {
    setInfo(initialState)
  }

  return (
    <FilterWrapper isOpen={isOpen}>
      <FilterHeader>filters</FilterHeader>
      <FilterContainer>
        <SearchBar />
        <FilterOptionsBody content={diets} />
        <FilterOptionsBody content={difficulties} />
        <FilterOptionsBody content={types} />
        <ClearButton onClick={() => clearState()}>Clear filters</ClearButton>
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
