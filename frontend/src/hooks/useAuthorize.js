import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "gatsby"

export const useAuthorize = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const loginInput = React.createRef({})
  const passwordInput = React.createRef({})
  let errorInput

  // const setAuthentication = type => {
  //   if (type) dispatch(authActions.setAuthenticated(true))
  //   else dispatch(authActions.setAuthenticated(false))
  // }

  const setLocalStorage = (token, user) => {
    // token && localStorage.setItem("token", JSON.stringify(data))
  }

  const setErrorStatus = (inputName, remove = false) => {
    if (typeof window !== "undefined") {
      if (remove === true) {
        document
          .querySelector(`input[id='${inputName}']`)
          .classList.remove("invalid")
      } else {
        errorInput = document.querySelector(`input[id='${inputName}']`)
        errorInput.classList.add("invalid")
        errorInput.setAttribute("className", "invalid")
      }
    }
  }

  const authorizeUser = async e => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const data = await axios.post(`${process.env.STRAPI_URL}/auth/local`, {
        identifier: loginInput.current.value,
        password: passwordInput.current.value,
      })
      console.log("Real function, not mocked")
      localStorage.setItem("token", JSON.stringify(data.data.jwt))
      localStorage.setItem("user", JSON.stringify(data.data.user.username))
      setIsLoading(false)
      navigate("/")
    } catch {
      setIsLoading(false)
      setErrorStatus("login")
      setErrorStatus("password")
      setIsValid(false)
    }
  }

  return {
    isLoading,
    isValid,
    passwordInput,
    loginInput,
    authorizeUser,
  }
}

// export default useAuthorize
