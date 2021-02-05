require('dotenv').config({
  path: `.env.all`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Builder.io`,
    description: ``,
    author: `Aziz Abbas`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/molecules/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-theme-style-guide',
      options: {
        // sets path for generated page
        basePath: '/design-system',
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: '@builder.io/gatsby',
      options: {
        publicAPIKey: process.env.BUILDER_API_KEY,
        /* to allow live preview editing on localhost*/
        custom404Dev: path.resolve('./src/pages/404.tsx'),
        templates: {
          /* Render every `page` model as a new page using the /page.tsx template
          /* based on the URL provided in Builder.io
          */
          page: path.resolve('./src/templates/page.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          './src/__generated__/gatsby-schema.graphql': true,
          './src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          './src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },
  ],
};
