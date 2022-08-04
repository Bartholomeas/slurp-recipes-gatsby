import React from "react"
import { render, screen } from "@testing-library/react"
import TestWrapper from "../../providers/TestWrapper"
import Button from "./Button"

it("renders correctly", () => {
  render(
    <TestWrapper>
      <Button>Send button</Button>
    </TestWrapper>
  )

  const buttonElement = screen.getByText(/Send button/i)
  expect(buttonElement).toBeInTheDocument()
})
