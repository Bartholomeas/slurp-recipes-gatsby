import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FilterWrapper, FilterContainer, ClearButton } from "./FilterBar.styles"
import FilterOptionsBody from "../../molecules/FilterOptionsBody/FilterOptionsBody"
import { StateContext } from "../../../context/StateContext"

const FilterBar = ({ isOpen = false, clearFiltering }) => {
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

  const { setInfo, setSearchedRecipes } = useContext(StateContext)

  const initialState = {
    diets: "",
    difficulties: "",
    types: "",
  }

  const clearAllRadioButtons = async () => {
    if (typeof window !== "undefined") {
      await document
        .querySelectorAll("input[type='checkbox']")
        .forEach(input => {
          input.checked = false
        })
    }
  }

  const clearState = () => {
    clearAllRadioButtons()
    setInfo(initialState)
    clearFiltering()
    setSearchedRecipes([])
  }
  return (
    <FilterWrapper isOpen={isOpen}>
      <FilterContainer>
        <FilterOptionsBody props={diets} content={diets} />
        <FilterOptionsBody props={difficulties} content={difficulties} />
        <FilterOptionsBody props={types} content={types} />
        <ClearButton
          isLong={true}
          onClick={() => {
            clearState()
          }}
        >
          Wyczyść
        </ClearButton>
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
