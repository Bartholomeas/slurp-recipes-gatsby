import React from "react"
import { Provider } from "react-redux"
import store from "./src/store/store"
import Layout from "./src/components/providers/Layout"

export const wrapPageElement = ({ element }) => {
  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
