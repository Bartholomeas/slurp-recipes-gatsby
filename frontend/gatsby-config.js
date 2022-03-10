/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "s:urp recipes",
    description: "Best recipes for every occasion",
    copyright: "copyright 2022 by s:urp",
    contact: "slurprecipes@gmail.com",
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
        apiURL: process.env.API_URL,
        collectionTypes: ["recipes", "difficulties", "types", "diets"],
        queryLimit: 1000, // Defaults to 100
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/`,
      },
    },
  ],
}
