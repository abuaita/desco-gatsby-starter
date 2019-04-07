module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /assets/ 
          }
        }
      }
    ],
  }