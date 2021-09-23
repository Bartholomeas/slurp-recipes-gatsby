import React from "react"
import { Provider } from "react-redux"
import createStore from "./src/state/createStore"

export default ({ children }) => {
  const store = createStore()

  return <Provider store={store}>children</Provider>
}
