import React, { createContext, useState, useEffect } from "react"
import { graphql } from "gatsby"

const StateContext = createContext()

export const StateProvider = ({ children }) => {
  useEffect(() => {
    const data = graphql`
      query GetRecipes {
        allStrapiRecipes {
          nodes {
            ingredients
            id
            difficulties {
              difficulty
            }
            diets {
              diet
            }
            types {
              types
            }
            title
            time
            preparation
            img {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 300)
                }
              }
            }
          }
        }
      }
    `
    setRecipes(data)
    console.log(data)
  }, [])
  const [recipes, setRecipes] = useState([
    {
      first: "Sushi futomaki",
    },
    {
      second: "Pizza Italiana",
    },
  ])

  return (
    <StateContext.Provider value={recipes}>{children}</StateContext.Provider>
  )
}

export default StateContext
