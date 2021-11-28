import React from "react"
import { Helmet } from "react-helmet"
import Modal from "react-modal"
import LandingSection from "../components/templates/LandingSection/LandingSection"
import RecipesSection from "../components/templates/RecipesSection/RecipesSection"

Modal.setAppElement(`#___gatsby`)

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Modal isOpen={true}>
        <h2>its modal</h2>
        <p>its paragraph of modal</p>
      </Modal>

      <LandingSection />
      <RecipesSection />
    </>
  )
}
export default Home
