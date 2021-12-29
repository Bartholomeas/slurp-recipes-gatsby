import React from "react"

import { render, fireEvent, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import TestWrapper from "../../providers/TestWrapper"
import { StateContext } from "../../../context/StateContext"

import Navbar from "./Navbar"

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <Navbar />
      </TestWrapper>,
      { wrapper: StateContext }
    )
  })
  it("press 'join now' button", () => {
    const joinBtn = screen.getByText("join now")
    fireEvent.click(joinBtn)
    const loginText = screen.getByAltText("log in.", { exact: false })
    expect(loginText).toBeInTheDocument()
    // expect(getByText(/join now/i).textContent).toBeTruthy()
    // fireEvent.click(getByText(/join now/i))
  })
})
