const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Recipes {
      allStrapiRecipes {
        nodes {
          title
        }
      }
    }
  `)

  data.allStrapiRecipes.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.title.toLowerCase().replace(/\s/g, "_")}`,
      component: path.resolve("./src/components/templates/recipe-details.js"),
      context: { slug: node.title },
    })
  })
}
