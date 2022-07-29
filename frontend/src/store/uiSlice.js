import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  navbarStatus: false,
  converterStatus: false,
  userPanelStatus: false,
  filterbarStatus: false,
  filterBtnStatus: false,
  loadingStatus: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavbar: (state, action) => {
      if (action.payload) {
        state.navbarStatus = action.payload
      }
      state.navbarStatus = !state.navbarStatus
    },
    toggleConverter: (state, action) => {
      if (action.payload) {
        state.converterStatus = action.payload
      }
      state.converterStatus = !state.converterStatus
    },
    toggleUserPanel: (state, action) => {
      if (action.payload) {
        state.userPanelStatus = action.payload
      }
      state.userPanelStatus = !state.userPanelStatus
    },
    toggleFilterbar: state => {
      state.filterbarStatus = !state.filterbarStatus
    },
    toggleFilterBtn: (state, action) => {
      state.filterBtnStatus = action.payload
    },
    toggleLoading: (state, action) => {
      if (action.payload) {
        state.userPanelStatus = action.payload
      }
      state.userPanelStatus = !state.userPanelStatus
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice
