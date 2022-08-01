import { useDispatch, useSelector } from "react-redux"
import { recipesActions } from "../store/recipesSlice"

const useFilters = () => {
  const dispatch = useDispatch()
  const { recipes, filteredRecipes, choosenFilters } = useSelector(
    state => state.recipes
  )

  const getFilters = (e = false) => {
    const { name, value } = e.target

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
    const difficultiesConditional = choosenFilters.difficulties
    const typesConditional = choosenFilters.types
    const dietsConditional = choosenFilters.diets

    console.log(difficultiesConditional)
    const filteredRecipesByFilters = recipes.filter(recipe => {
      return (
        recipe.difficulties[0].difficulties === difficultiesConditional &&
        recipe.diets[0].diets === dietsConditional &&
        recipe.types[0].types === typesConditional
      )
    })
    // console.log(dietConditional, difficultyConditional, typeConditional)
    console.log(filteredRecipesByFilters)

    dispatch(recipesActions.filterRecipes(filteredRecipesByFilters))
  }

  return { getFilters, clearFilters, filterRecipes }
}

export default useFilters
