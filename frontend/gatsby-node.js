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
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react_router_dom/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
