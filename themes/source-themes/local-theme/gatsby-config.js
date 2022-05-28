module.exports = ({ contentPath = "data" }) => ({
    plugins: [
        "gatsby-transformer-json",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "gatsby-theme-local",
                path: contentPath,
            },
        },
    ],
});
