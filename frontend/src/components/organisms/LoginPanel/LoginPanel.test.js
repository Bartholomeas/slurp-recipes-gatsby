import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
// import TestRenderer from "react-test-renderer"
import axios from "axios"
import LoginPanel from "./LoginPanel"
import TestWrapper from "../../providers/TestWrapper"
// import { authorizeUser } from "./authorizeUser"
export { authorizeUser } from "./LoginPanel"

axios.post = jest.fn(() => {
  console.log("Axios mocked post")
  return false
})

global.authorizeUser = jest.fn(() => {
  return new Promise(resolve => {
    console.log("authorizeUser mocked")
    resolve(true)
  })
})

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
        1
        <LoginPanel />
      </TestWrapper>
    )

    const loginInput = screen.getByLabelText(/login/i)
    const passwordInput = screen.getByLabelText(/hasło/i)
    const loginButton = screen.getByRole("button")
    fireEvent.change(loginInput, { target: { value: "test123@onet.pl" } })
    fireEvent.change(passwordInput, { target: { value: "Testowe123" } })

    fireEvent.click(loginButton)

    const object = {
      identifier: "test123@onet.pl",
      password: "Testowe123",
    }

    const response = { status: 200 }
    await act(async () => {
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

  it("logs in with error", async () => {
    render(
      <TestWrapper>
        <LoginPanel />
      </TestWrapper>
    )

    const loginInput = screen.getByLabelText(/login/i)
    const passwordInput = screen.getByLabelText(/hasło/i)
    const loginButton = screen.getByRole("button")

    await act(async () => {
      axios.post.mockRejectedValue(new Error("Error"))
      fireEvent.change(passwordInput, { target: { value: "" } })
      fireEvent.change(loginInput, { target: { value: "" } })
      fireEvent.click(loginButton)
    })
  })
})
