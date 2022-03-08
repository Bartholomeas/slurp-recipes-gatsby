import React from "react"
import Layout from "./src/components/providers/Layout"
import StateProvider from "./src/context/StateContext"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}
