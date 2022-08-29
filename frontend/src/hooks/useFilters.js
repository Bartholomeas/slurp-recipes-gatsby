import { useDispatch, useSelector } from "react-redux"
import { recipesActions } from "../store/recipesSlice"

const useFilters = () => {
  const dispatch = useDispatch()
  const { recipes, choosenFilters } = useSelector(state => state.recipes)

  const getFilters = (e = false) => {
    const { name, value } = e.target
    const inputs = e.target
      .closest("form")
      .querySelectorAll('input[type="checkbox"]')

    inputs.forEach(input => {
      if (choosenFilters[input.name] === input.value) input.checked = false
    })

    dispatch(recipesActions.setChoosenFilters({ [name]: value }))
  }

  const clearFilters = () => {
    const inputs = document.querySelectorAll('input[type="checkbox"]')

    inputs.forEach(input => {
      input.checked = false
    })

    dispatch(recipesActions.clearChoosenFilters())
  }

  const filterRecipes = () => {
    const keys = Object.keys(choosenFilters)

    const filteredRecipesByFilters = recipes.filter(recipe => {
      return keys.every(key => recipe[key][0][key] === choosenFilters[key])
    })

    dispatch(recipesActions.filterRecipes(filteredRecipesByFilters))
  }

  return { getFilters, clearFilters, filterRecipes }
}

export default useFilters
