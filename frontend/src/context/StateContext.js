import React, { createContext, useState } from "react"

export const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [info, setInfo] = useState("informancja")

  return (
    <StateContext.Provider value={{ info, setInfo }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
