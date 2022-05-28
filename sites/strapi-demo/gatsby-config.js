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
        {
            resolve: "gatsby-theme-strapi",
            options: {
                apiURL: `http://localhost:1337`,
                queryLimit: 1000,
                collectionTypes: ["articles", "projects"],
                singleTypes: [
                    "contact",
                    "footer-01",
                    "footer-02",
                    "footer-03",
                    "footer-04",
                    "header-01",
                    "header-02",
                    "header-03",
                    "header-04",
                    "menu",
                    "home-agency-page",
                    "home-business-page",
                    "home-digital-marketer-page",
                    "home-seo-page",
                    "inner-about-page",
                    "inner-faq-page",
                    "inner-service-page",
                    "inner-team-page",
                    "inner-testimonial-page",
                ],
            },
        },
    ],
};
