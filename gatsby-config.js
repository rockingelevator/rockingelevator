module.exports = {
  siteMetadata: {
    title: 'RockingElevator',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans:400,700`],
      },
    },
  ],
}
