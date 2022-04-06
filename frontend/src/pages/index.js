import React from "react"
import { Helmet } from "react-helmet"
import LandingSection from "../components/templates/LandingSection/LandingSection"
import RecipesSection from "../components/templates/RecipesSection/RecipesSection"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="pl" />
        <title>Siorb przepisy 🍔</title>
        <meta
          name="description"
          content="Przepisy, które pokocha cała rodzina!"
        />
        <link rel="canonical" href="http://localhost:8000/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <LandingSection />
      <RecipesSection />
    </>
  )
}
export default Home
