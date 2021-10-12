module.exports = {
  siteMetadata: {
    siteUrl: "https://embed.ynhh.org",
    title: "Embed Links",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    }
  ],
};
