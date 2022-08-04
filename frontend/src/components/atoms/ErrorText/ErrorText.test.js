import React from "react"
import { render, screen } from "@testing-library/react"
import TestWrapper from "../../providers/TestWrapper"
import ErrorText from "./ErrorText"

it("renders Error message", () => {
  render(
    <TestWrapper>
      <ErrorText>Error, update your inputs</ErrorText>
    </TestWrapper>
  )

  const errorMsg = screen.getByText("Error, update your inputs")
  expect(errorMsg).toBeInTheDocument()
})
