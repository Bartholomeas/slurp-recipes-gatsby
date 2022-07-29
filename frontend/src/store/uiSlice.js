import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterbarStatus: false,
  filterBtnStatus: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleFilterbar: state => {
      state.filterbarStatus = !state.filterbarStatus
    },
    toggleFilterBtn: (state, action) => {
      state.filterBtnStatus = action.payload
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice
