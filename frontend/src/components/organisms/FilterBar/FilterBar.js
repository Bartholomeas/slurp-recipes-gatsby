import { useContext } from "react"
import useFilters from "../../../hooks/useFilters"
import { graphql, useStaticQuery } from "gatsby"
import { FilterWrapper, FilterContainer, ClearButton } from "./FilterBar.styles"
import FilterOptionsBody from "../../molecules/FilterOptionsBody/FilterOptionsBody"
import { StateContext } from "../../../context/StateContext"

const FilterBar = ({ isOpen = false }) => {
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
  const { clearFilters } = useFilters()

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
    // setInfo(initialState)
    // clearFiltering()
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
            clearFilters()
          }}
        >
          Wyczyść
        </ClearButton>
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
