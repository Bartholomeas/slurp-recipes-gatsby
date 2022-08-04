import React from "react"
import { render } from "@testing-library/react"
import TestWrapper from "../../providers/TestWrapper"
import { FilterOption } from "./FilterOption"

test("Renders correctly options with props", () => {
  const { getByText } = render(
    <TestWrapper>
      <FilterOption name="diet" option="vegan" id={0} />
    </TestWrapper>
  )

  const optionElement = getByText(/vegan/i)
  expect(optionElement).toBeInTheDocument()
})
