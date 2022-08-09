import React from "react"
import { act } from "react-test-renderer"
import { render, screen, fireEvent } from "@testing-library/react"
import axios from "axios"
import LoginPanel from "./LoginPanel"
import TestWrapper from "../../providers/TestWrapper"
// import { authorizeUser } from "./authorizeUser"
export { authorizeUser } from "./LoginPanel"

axios.post = jest.fn(() => {
  console.log("Axios mocked post")
})

// jest.mock("axios", () => ({
//   post: jest.fn(() => {
//     console.log("to axios request jest")
//     return new Promise(resolve => {
//       resolve(true)
//     })
//   }),
// }))

// jest.mock("authorizeUser", () => ({
//   authorizeUser: jest.fn(() => {
//     console.log("to authorizeUser jest")
//     return new Promise(resolve => {
//       resolve(true)
//     })
//   }),
// }))

// jest.fn()

describe("Login panel component", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it("renders correctly", () => {
    render(
      <TestWrapper>
        <LoginPanel />
      </TestWrapper>
    )

    const loginBodyElement = screen.getByTestId("login-body")
    const loginInput = screen.getByLabelText(/login/i)
    const passwordInput = screen.getByLabelText(/hasło/i)
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument
    expect(loginBodyElement).toBeInTheDocument()
    expect(loginInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it("logs in", async () => {
    render(
      <TestWrapper>
        <LoginPanel />
      </TestWrapper>
    )

    const loginInput = screen.getByLabelText(/login/i)
    const passwordInput = screen.getByLabelText(/hasło/i)
    const loginButton = screen.getByRole("button")
    fireEvent.change(loginInput, { target: { value: "test123@onet.pl" } })
    fireEvent.change(passwordInput, { target: { value: "Testowe123" } })
    act(() => {
      fireEvent.click(loginButton)
    })

    const object = {
      identifier: "test123@onet.pl",
      password: "Testowe123",
    }

    const response = { status: 200 }
    act(() => {
      axios.post.mockResolvedValue(response)

      expect(axios.post).toHaveBeenCalledTimes(1)

      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.STRAPI_URL}/auth/local`,
        object
      )
    })

    setTimeout(() => {
      expect(screen.getByLabelText(/login/i)).toBeFalsy()
    }, 1000)
  })
})
