import React from "react"
import styled from "styled-components"
import Layout from "../providers/Layout"
import { graphql } from "gatsby"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 7rem;
`

const RecipeDetails = ({ data }) => {
  console.log(data)
  const { id, preparation } = data.strapiRecipes

  return (
    <Layout>
      <Wrapper>
        <div>przepis jakiśtam</div>
        <div>{id}</div>
        <div>{preparation}</div>
      </Wrapper>
    </Layout>
  )
}

export default RecipeDetails

export const query = graphql`
  query RecipeDetails($slug: String) {
    strapiRecipes(id: { eq: $slug }) {
      id
      preparation
    }
  }
`
