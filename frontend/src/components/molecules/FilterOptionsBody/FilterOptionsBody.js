import React from "react"
import styled from "styled-components"
import { FilterOptionHeader } from "../../atoms/FilterLabel/FilterHeader"
import { FilterOption } from "../../atoms/FilterOption/FilterOption"

const FilterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`

const FilterOptionsBody = ({ content }) => {
  return (
    <FilterWrapper>
      <FilterOptionHeader content={Object.keys(content[0])} />
      {content
        ? content.map((el, idx) => (
            <FilterOption
              key={idx}
              name={Object.keys(content[0])}
              option={Object.values(el)}
              id={idx}
            />
          ))
        : null}
    </FilterWrapper>
  )
}

export default FilterOptionsBody
