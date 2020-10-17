module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Montserrat:400,700,900',
            'Merriweather:400,700,900',
            'Georgia:400,700,900',
            'Noto+Sans+JP:400,700,900',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 100,
              withWebp: true,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: {
                tsx: 'tsx',
              },
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
        documentPaths: [
          './src/gatsby/node/createPages.js',
          // './src/**/*.{ts,tsx}',
          './.cache/fragments/*.js',
          './node_modules/gatsby-*/**/*.js',
        ],
      },
    },
  ],
}
