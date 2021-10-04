import React from "react"
import LandingSection from "../components/templates/LandingSection/LandingSection"
import RecipesSection from "../components/templates/RecipesSection/RecipesSection"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Top Recipes by s:urp</title>
        <meta
          name="description"
          content="Best recipes that will be loved by everyone of your family, friends, kids or animals!"
        />
        <link rel="canonical" href="http://localhost:8000/" />
      </Helmet>
      <LandingSection />
      <RecipesSection />
    </>
  )
}
export default Home
