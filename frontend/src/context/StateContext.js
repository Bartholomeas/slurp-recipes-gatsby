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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const closeModal = e => {
    e.preventDefault()
    setIsModalOpen(false)
  }
  return (
    <StateContext.Provider
      value={{
        info,
        setInfo,
        isAuthenticated,
        setIsAuthenticated,
        setIsModalOpen,
        isModalOpen,
        closeModal,
        filteredRecipes,
        setFilteredRecipes,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
