import { configureStore } from "@reduxjs/toolkit"
import recipesSlice from "./recipesSlice"
import uiSlice from "./uiSlice"

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    recipes: recipesSlice.reducer,
  },
})

export default store
