module.exports = {
  siteMetadata: {
    title: `project setup config`,
    description: `template for my new projects`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // Import Aliases
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {
    //       app: './src/components/app',
    //       pages: './src/pages',
    //       components: './src/components',
    //       store: './src/store',
    //       models: './src/models',
    //     },
    //     extensions: ['js', 'css', 'json', 'svg', 'png', 'jpeg', 'jpg'],
    //   },
    // },
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
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
