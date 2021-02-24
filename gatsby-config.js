module.exports = {
  siteMetadata: {
    title: "Web Factor",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "86657742f057ecc0ab06a01460d845",
      },
    },
  ],
};
