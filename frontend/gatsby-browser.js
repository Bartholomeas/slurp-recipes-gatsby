import React from "react"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import Layout from "./src/components/providers/Layout"
import StateProvider from "./src/context/StateContext"

const wrapPageElement = ({ element }) => {
  return (
    <StateProvider>
      <Layout>{element}</Layout>
    </StateProvider>
  )
}

const wrapRootElement = ({ element }) => {
  return (
    <StateProvider>
      <Layout>{element}</Layout>
    </StateProvider>
  )
}

export { wrapPageElement, wrapRootElement }
