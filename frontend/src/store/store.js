import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
  recipes: ["dupa"],
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      console.log(state)
      state.recipes = [action.payload]
    },
  },
})

const store = configureStore({ reducer: { recipes: recipesSlice.reducer } })

export const recipesActions = recipesSlice.actions
export default store
