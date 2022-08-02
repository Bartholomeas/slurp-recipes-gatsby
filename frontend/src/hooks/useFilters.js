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
    // const checkPropertyCompatibility = recipe => {
    //   for (const property in choosenFilters) {
    //     let propertyType
    //     if (property === "difficulties") {
    //       propertyType = difficultiesConditional
    //     } else if (property === "types") {
    //       propertyType = typesConditional
    //     } else if (property === "diets") {
    //       propertyType = dietsConditional
    //     }
    //     if (recipe[property][0][property] === propertyType) return true
    //     return false
    //   }
    // }
    // console.log(choosenFilters[1])
    const key = Object.keys(choosenFilters)
    const value = choosenFilters[key]
    let filteredRecipesByFilters = recipes.filter(recipe => {
      console.log(value)
      return recipe[key[0]][0][key[0]] === value
    })
    //   .filter(recipe => {
    //     const key = Object.keys(choosenFilters)
    //     if (!key[1]) return false
    //     const value = choosenFilters[key]
    //     console.log(value)
    //     return recipe[key[0]][0][key[0]] === value
    //   })
    console.log(filteredRecipesByFilters)

    dispatch(recipesActions.filterRecipes(filteredRecipesByFilters))
  }

  return { getFilters, clearFilters, filterRecipes }
}

export default useFilters
// (recipe.types[0].types === typesConditional &&
//   recipe.diets[0].diets === dietsConditional) ||
// (recipe.types[0].types === typesConditional &&
//   recipe.difficulties[0].difficulties === difficultiesConditional) ||
// (recipe.diets[0].diets === dietsConditional &&
//   recipe.difficulties[0].difficulties === difficultiesConditional)
