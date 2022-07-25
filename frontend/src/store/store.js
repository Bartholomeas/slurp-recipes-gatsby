import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
  recipes: [],
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      console.log(state)
    },
  },
})

const store = configureStore({ reducer: { recipes: recipesSlice.reducer } })

export default store
