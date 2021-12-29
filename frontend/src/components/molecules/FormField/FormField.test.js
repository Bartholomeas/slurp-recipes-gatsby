import React from "react"
import { render, screen, cleanup } from "@testing-library/react"

import TestWrapper from "../../providers/TestWrapper"

import FormField from "./FormField"

afterEach(cleanup)

it("should render correct text", () => {
  render(
    <TestWrapper>
      <FormField />
    </TestWrapper>
  )
  const linkElement = screen.getByText("title")
  expect(linkElement)
})
