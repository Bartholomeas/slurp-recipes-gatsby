import React from "react"
import Layout from "../components/providers/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Home = () => {
  return (
    <Layout>
      <StaticImage src="../images/pizza.png" alt="Pizza" />
      <div>RECIPES</div>
      <div>RECIPES</div>
      <div>RECIPES</div>
      <div>RECIPES</div>
      <div>RECIPES</div>
      <div>RECIPES</div>
    </Layout>
  )
}

export default Home
