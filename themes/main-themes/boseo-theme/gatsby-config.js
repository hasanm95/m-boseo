module.exports = (options) => ({
    plugins: [
        {
            resolve: "gatsby-theme-core",
            options: {
                siteMetadata: options.siteMetadata || {},
                manifest: options.manifest || {},
                themeOptions: options.themeOptions || {},
            },
        },
        "gatsby-theme-component",
        "gatsby-theme-container",
        "gatsby-theme-layout",
        "gatsby-theme-ui",
        {
            resolve: "gatsby-theme-project",
            options: options.project || {},
        },
        {
            resolve: "gatsby-theme-blog",
            options: options.blog || {},
        },
    ],
});
