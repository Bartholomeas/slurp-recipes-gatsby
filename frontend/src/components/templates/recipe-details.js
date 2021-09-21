import React from "react"
import styled from "styled-components"
import Layout from "../providers/Layout"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 7rem;
`

const RecipeDetails = () => {
  return (
    <Layout>
      <Wrapper>
        <div>przepis jakiśtam</div>
      </Wrapper>
    </Layout>
  )
}

export default RecipeDetails
