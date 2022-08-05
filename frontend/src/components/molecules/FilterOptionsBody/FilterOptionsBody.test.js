import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FilterOptionsBody from "./FilterOptionsBody"
import TestWrapper from "../../providers/TestWrapper"

const propState = [
  { diets: "bez-laktozy" },
  { diets: "wege" },
  { diets: "zbilansowana" },
  { diets: "wegańska" },
]

describe("FilterOptionsBody component", () => {
  it("Renders correctly options", () => {
    render(
      <TestWrapper>
        <FilterOptionsBody content={propState}/>
      </TestWrapper>
    )
    const filterOptionOutput = screen.getByText("wege")
    expect(filterOptionOutput).toBeInTheDocument()
  })
  it("Renders correctly check status after press", () => {
    render(
      <TestWrapper>
        <FilterOptionsBody content={propState}></FilterOptionsBody>
      </TestWrapper>
    )

    const filterOptionOutput = screen.queryAllByTestId("checkbox-input")
    expect(filterOptionOutput).not.toHaveLength(0)
    expect(filterOptionOutput[0].checked).toBe(false)
    userEvent.click(filterOptionOutput[0])
    expect(filterOptionOutput[0].checked).toBe(true)
  })
})
