import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { recipesActions } from "../store/recipesSlice"

const useFilters = () => {
  const dispatch = useDispatch()
  const { filteredRecipes, choosenFilters } = useSelector(
    state => state.recipes
  )
  const getFilters = e => {
    const { name, value, checked } = e.target
    // if (e.target.checked) console.log(name, value)
    console.log(choosenFilters)
    if (checked) dispatch(recipesActions.setChoosenFilters({ [name]: value }))
  }

  const clearFilters = () => {
    dispatch(recipesActions.clearChoosenFilters())
  }

  return [getFilters, clearFilters]
}

export default useFilters
