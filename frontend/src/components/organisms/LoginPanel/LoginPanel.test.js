import React from "react"
import { act } from "react-test-renderer"
import { render, screen, fireEvent } from "@testing-library/react"
import LoginPanel from "./LoginPanel"
import axios from "axios"
import TestWrapper from "../../providers/TestWrapper"

jest.mock("axios", () => ({
  post: jest.fn((_url, _body) => {
    console.log("to axios request jest")
    return new Promise(resolve => {
      //   url = _url
      //   body = _body
      resolve(true)
    })
  }),
}))

// jest.mock("axios", () => ({
//   authorizeUser: jest.fn((_url, _body) => {
//     console.log("to authorizeUser jest")
//     return new Promise(resolve => {
//       url = _url
//       body = _body
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

    const response = { data: { status: 200 } }
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
