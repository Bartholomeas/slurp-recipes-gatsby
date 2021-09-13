import React from "react"
import Layout from "../components/providers/Layout"
import LandingSection from "../components/templates/LandingSection/LandingSection"
import RecipesSection from "../components/templates/RecipesSection/RecipesSection"

const Home = () => {
  return (
    <Layout>
      <LandingSection />
      <RecipesSection />
    </Layout>
  )
}
export default Home
