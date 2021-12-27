import React from "react"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"

import TestWrapper from "../../providers/TestWrapper"

import FormField from "./FormField"

it("should type correct text", () => {
  render(
    <TestWrapper>
      <FormField label="Tytul" />
    </TestWrapper>
  )
  const linkElement = screen.getByText("Tytul")
  expect(linkElement)
})
