const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Recipes {
      allStrapiRecipes {
        nodes {
          id
          title
        }
      }
    }
  `)

  data.allStrapiRecipes.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.id}`,
      component: path.resolve("./src/components/templates/recipe-details.js"),
      context: { slug: node.id },
    })
  })
}
