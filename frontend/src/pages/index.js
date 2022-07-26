import React from "react"
import { Helmet } from "react-helmet"
import FeaturedRecipes from "../components/organisms/FeaturedRecipes/FeaturedRecipes"
import LandingSection from "../components/templates/LandingSection/LandingSection"
import RecipesSection from "../components/templates/RecipesSection/RecipesSection"

const Home = () => {
  return (
    <>
      <LandingSection />
      <FeaturedRecipes />
      <RecipesSection />
    </>
  )
}
export default Home
