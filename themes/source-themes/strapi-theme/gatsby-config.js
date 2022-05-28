module.exports = (options) => ({
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options,
        },
    ],
});
