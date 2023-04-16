/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `product-preview-card`,
    siteUrl: `https://product-preview-card-git-main-muniruissah.vercel.app/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      },
    },
    'gatsby-plugin-postcss',]
}
