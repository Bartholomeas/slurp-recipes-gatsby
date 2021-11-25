import React, { createContext, useState } from "react"

export const StateContext = createContext()
const initialState = {
  diets: "",
  difficulties: "",
  types: "",
}

const StateProvider = ({ children }) => {
  const [info, setInfo] = useState(initialState)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <StateContext.Provider
      value={{
        info,
        setInfo,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
