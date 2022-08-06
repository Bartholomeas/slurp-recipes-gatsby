import React, { useEffect } from "react"
import useFilters from "../../../hooks/useFilters"
import { graphql, useStaticQuery } from "gatsby"
import {
  FilterWrapper,
  FilterContainer,
  ButtonContainer,
} from "./FilterBar.styles"
import Button from "../../atoms/Button/Button"
import FilterOptionsBody from "../../molecules/FilterOptionsBody/FilterOptionsBody"

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

  const diets = data.allStrapiDiets.nodes
  const difficulties = data.allStrapiDifficulties.nodes
  const types = data.allStrapiTypes.nodes

  const { clearFilters, filterRecipes } = useFilters()
  return (
    <FilterWrapper isOpen={isOpen} data-testid="filterbar">
      <FilterContainer>
        <FilterOptionsBody content={diets} />
        <FilterOptionsBody content={difficulties}/>
        <FilterOptionsBody content={types} />
        <ButtonContainer>
          <Button isLong={true} onClick={filterRecipes}>
            Zatwierdź
          </Button>
          <Button greyColor={true} isLong={true} onClick={clearFilters}>
            Wyczyść
          </Button>
        </ButtonContainer>
      </FilterContainer>
    </FilterWrapper>
  )
}

export default FilterBar
