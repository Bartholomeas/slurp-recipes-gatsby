/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/slurp-recipes-gatsby",
  siteMetadata: {
    title: "Siorb przepisy",
    description: "Najlepsze przepisy na każdą okazję",
    copyright: "copyright 2022 by s:urp",
    contact: "kontakt@siorb.com",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-testing",

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        collectionTypes: ["recipes", "difficulties", "types", "diets"],
        queryLimit: 10000, // Defaults to 100
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "strapiRecipes",
        imagePath: "path.to.image",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
  ],
}
