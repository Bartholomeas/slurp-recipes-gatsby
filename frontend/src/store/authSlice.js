import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
  },
})

export const authActions = authSlice.actions
export default authSlice
