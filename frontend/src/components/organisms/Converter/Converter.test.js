import React from "react"
import { render, screen } from "@testing-library/react"
import Converter from "./Converter"

describe("Converter component", () => {
  it("Renders correctly", () => {
    render(<Converter></Converter>)
  })
})
