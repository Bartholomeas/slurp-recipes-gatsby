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
  const [searchedRecipes, setSearchedRecipes] = useState([])

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
        searchedRecipes,
        setSearchedRecipes,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
