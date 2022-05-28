// const path = require("path");

const siteMetadata = require("./config/meta-data");
const manifest = require("./config/manifest");
const themeOptions = require("./config/theme-options");

module.exports = {
    plugins: [
        "gatsby-theme-layout",
        {
            resolve: "gatsby-theme-boseo",
            options: {
                siteMetadata,
                manifest,
                themeOptions,
            },
        },
        {
            resolve: "gatsby-theme-local",
            options: {
                contentPath: `${__dirname}/data`,
            },
        },
    ],
};
