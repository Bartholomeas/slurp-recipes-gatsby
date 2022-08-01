import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  recipes: [],
  featuredRecipes: [],
  searchedRecipes: [],
  choosenFilters: {},
  filteredRecipes: [],
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

    setChoosenFilters: (state, action) => {
      if (action.payload)
        state.choosenFilters = { ...state.choosenFilters, ...action.payload }
    },

    clearChoosenFilters: state => {
      state.choosenFilters = initialState.choosenFilters
      state.filteredRecipes = []
    },

    filterRecipes: (state, action) => {
      state.filteredRecipes = [...action.payload]
      console.log(state.filteredRecipes)
    },
  },
})

export const recipesActions = recipesSlice.actions
export default recipesSlice
