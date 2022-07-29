import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  recipes: [],
  choosenFilters: [],
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = [...action.payload]
    },
  },
})

export const recipesActions = recipesSlice.actions
export default recipesSlice
