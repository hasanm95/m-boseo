// const path = require("path");

const siteMetadata = require("./config/meta-data");
const manifest = require("./config/manifest");
const themeOptions = require("./config/theme-options");

module.exports = {
    plugins: [
        {
            resolve: "gatsby-theme-boseo",
            options: {
                siteMetadata,
                manifest,
                themeOptions,
            },
        },
    ],
};
