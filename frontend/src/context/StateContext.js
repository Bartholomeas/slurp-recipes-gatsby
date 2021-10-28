import React, { createContext, useState } from "react"

export const StateContext = createContext()
const initialState = {
  diets: "",
  difficulties: "",
  types: "",
}

const StateProvider = ({ children }) => {
  const [info, setInfo] = useState(initialState)

  return (
    <StateContext.Provider value={{ info, setInfo }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
