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

    // const heh = recipes.reduce((result, value) => {
    //   if (value.diets[0].diets === dietsConditional) return result
    //   return result.push(value)
    // }, [])

    // for (const property in choosenFilters) {
    //   console.log(choosenFilters[property])
    // }
    // for (const property in choosenFilters) {
    //   let propertyType
    //   if (property === "difficulties") {
    //     propertyType = difficultiesConditional
    //   } else if (property === "types") {
    //     propertyType = typesConditional
    //   } else if (property === "diets") {
    //     propertyType = dietsConditional
    //   }
    //   if (recipe.property[0].property === propertyType) {
    //     console.log("gitjest")
    //   }
    // }
    const filteredRecipesByFilters = recipes.filter(recipe => {
      for (const property in choosenFilters) {
        let propertyType
        if (property === "difficulties") {
          propertyType = difficultiesConditional
        } else if (property === "types") {
          propertyType = typesConditional
        } else if (property === "diets") {
          propertyType = dietsConditional
        }
        console.log(property)
      }

      //   return (
      //     (recipe.difficulties[0].difficulties === difficultiesConditional &&
      //       recipe.diets[0].diets === dietsConditional &&
      //       recipe.types[0].types === typesConditional) ||
      //     (recipe.types[0].types === typesConditional &&
      //       recipe.diets[0].diets === dietsConditional) ||
      //     (recipe.types[0].types === typesConditional &&
      //       recipe.difficulties[0].difficulties === difficultiesConditional) ||
      //     (recipe.diets[0].diets === dietsConditional &&
      //       recipe.difficulties[0].difficulties === difficultiesConditional)
      //   )
    })
    console.log(filteredRecipesByFilters)

    // dispatch(recipesActions.filterRecipes(filteredRecipesByFilters))
  }

  return { getFilters, clearFilters, filterRecipes }
}

export default useFilters
