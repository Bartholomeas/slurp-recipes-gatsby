import React, { createContext, useState } from "react"

export const StateContext = createContext({
  recipes: [],
})

const StateProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      first: "Sushi futomaki",
    },
  ])

  return (
    <StateContext.Provider value={{recipes}}>{children}</StateContext.Provider>
  )
}
