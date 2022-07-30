import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  recipes: [],
  featuredRecipes: [],
  filteredRecipes: [],
  searchedRecipes: [],
  choosenFilters: [],
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = [...action.payload]
    },
    setFeaturedRecipes: (state, action) => {
      state.featuredRecipes = [...action.payload]
    },
    setSearchedRecipes: (state, action) => {
      state.searchedRecipes = [...action.payload]
    },
  },
})

export const recipesActions = recipesSlice.actions
export default recipesSlice
