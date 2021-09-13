import React from "react"
import { FilterOptionHeader } from "../../atoms/FilterLabel/FilterHeader"
import { FilterOption } from "../../atoms/FilterOption/FilterOption"

const FilterOptionsBody = () => {
  return (
    <div>
      <FilterOptionHeader content="difficulty" />
      <FilterOption option="easy" />
    </div>
  )
}

export default FilterOptionsBody
