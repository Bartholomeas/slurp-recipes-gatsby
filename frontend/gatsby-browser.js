import React from "react"
import Layout from "./src/components/providers/Layout"

import { StateProvider } from "./src/context/StateContext"

export const wrapPageElement = ({ element }) => {
  console.log(element)
  return (
    <StateProvider>
      <Layout>{element}</Layout>
    </StateProvider>
  )
}
