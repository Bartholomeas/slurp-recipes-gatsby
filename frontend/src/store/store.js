import { configureStore } from "@reduxjs/toolkit"
import recipesSlice from "./recipesSlice"
import uiSlice from "./uiSlice"
import authSlice from "./authSlice"

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    recipes: recipesSlice.reducer,
    auth: authSlice.reducer,
  },
})

export default store
