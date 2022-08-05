import React from "react"
import { render, screen } from "@testing-library/react"
import Converter from "./Converter"
import TestWrapper from "../../providers/TestWrapper"

describe("Converter component", () => {
  it("Renders correctly", () => {
    render(
      <TestWrapper>
        <Converter></Converter>
      </TestWrapper>
    )
  })
})
