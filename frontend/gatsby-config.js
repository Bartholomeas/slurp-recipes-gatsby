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
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-testing",

    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     defaults: {},
    //     failOnError: true,
    //     base64Width: 20,
    //     // forceBase64Format: `webp`,
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        collectionTypes: ["recipes", "difficulties", "types", "diets", "users"],
        // queryLimit: 10000, // Defaults to 100
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
  ],
}
