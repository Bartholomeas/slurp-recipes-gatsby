// import React, { createContext, useState, useEffect } from "react"
// import { graphql, useStaticQuery } from "gatsby"

// const StateContext = createContext()

// export const StateProvider = ({ children }) => {
//   const [recipes, setRecipes] = useState([
//     {
//       first: "Sushi futomaki",
//     },
//     {
//       second: "Pizza Italiana",
//     },
//   ])

//   const data = useStaticQuery(graphql`
//     query GetRecipes2 {
//       allStrapiRecipes {
//         nodes {
//           ingredients
//           id
//           difficulties {
//             difficulty
//           }
//           diets {
//             diet
//           }
//           types {
//             types
//           }
//           title
//           time
//           preparation
//           img {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(width: 300)
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   useEffect(() => {
//     console.log(data)
//     setRecipes(data)
//   }, [data])
//   console.log(recipes)

//   return (
//     <StateContext.Provider value={(recipes, setRecipes)}>
//       {children}
//     </StateContext.Provider>
//   )
// }

// export default StateContext
