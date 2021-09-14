import React from "react"
import styled from "styled-components"
import { FilterOptionHeader } from "../../atoms/FilterLabel/FilterHeader"
import { FilterOption } from "../../atoms/FilterOption/FilterOption"

const FilterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  margin-bottom: 3rem;
`

const FilterOptionsBody = ({ content }) => {
  console.log(content)
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
