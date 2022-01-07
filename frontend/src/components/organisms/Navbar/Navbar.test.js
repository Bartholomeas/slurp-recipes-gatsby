import React from "react"

import { render, fireEvent, screen } from "@testing-library/react"

import TestWrapper from "../../providers/TestWrapper"

import Navbar from "./Navbar"

describe("Navbar", () => {
  it("renders the navbar", () => {
    const { container } = render(<Navbar />, { wrapper: TestWrapper })
    const joinBtn = container.querySelector(".join-link")
    expect(joinBtn).toBeInTheDocument()
  })

  it("opens the converter menu", () => {
    const { container } = render(<Navbar />, { wrapper: TestWrapper })

    const converterIcon = screen.getByTestId("converter-icon")
    expect(converterIcon).toBeInTheDocument()
    fireEvent.click(converterIcon)
    const measure = screen.getByText(/240ml/i)
    const cutlery = screen.getByText(/tablespoon/i)
    expect(measure).toBeInTheDocument()
    expect(cutlery).toBeInTheDocument()
  })

  // it("tests the dummy mock request", async () => {
  //   window.fetch = jest.fn()
  //   window.fetch.mockResolvedValueOnce({
  //     json: async () => [{ isAuthenticated: true }],
  //   })
  // })
})
