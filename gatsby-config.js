require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const path = require('path')

const config = {
  siteMetadata: {
    title: `A Title`,
    description: `A punch line about your products and services!`,
    author: `@dashfy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`)
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          // "config",
          // "pages",
          // "blocks"
        ],
        queryLimit: 1000
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}

if (process.env.STRAPI_IDENTIFIER && process.env.STRAPI_PASSWORD) {
  config.plugins.forEach(plugin => {
    if (plugin.resolve === 'gatsby-source-strapi') {
      plugin.options.loginData = {
        identifier: process.env.STRAPI_IDENTIFIER,
        password: process.env.STRAPI_PASSWORD
      }
    }
  })
}

module.exports = config
