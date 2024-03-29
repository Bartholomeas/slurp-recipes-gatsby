import React from "react"
import styled from "styled-components"
import { FilterOptionHeader } from "../../atoms/FilterLabel/FilterOptionHeader"
import { FilterOption } from "../../atoms/FilterOption/FilterOption"

const FilterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`

const FilterOptionsBody = ({ content }) => {
  const filterHeader = Object.keys(content[0])
  return (
    <FilterWrapper>
      <FilterOptionHeader
        content={
          filterHeader[0] === "diets"
            ? "dieta"
            : filterHeader[0] === "difficulties"
            ? "trudność"
            : "posiłek"
        }
      />
      {content &&
        content.map((el, idx) => (
          <FilterOption
            key={idx}
            name={Object.keys(content[0])}
            option={Object.values(el)}
            id={idx}
          />
        ))}
    </FilterWrapper>
  )
}

export default FilterOptionsBody
