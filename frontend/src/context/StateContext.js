import React, { createContext, useState } from "react"

const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [info, setInfo] = useState("informancja")

  return <StateContext.Provider value={info}>{children}</StateContext.Provider>
}

export default StateContext
