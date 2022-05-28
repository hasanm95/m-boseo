const path = require("path");
// eslint-disable-next-line import/extensions
const meta = require("./site-config/meta-data.js");
const fest = require("./site-config/manifest");

// const activeEnv =
//     process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

module.exports = (options) => {
    const { siteMetadata, manifest } = options;
    const pathPrefix = siteMetadata.pathPrefix
        ? siteMetadata.pathPrefix
        : meta.pathPrefix;

    return {
        siteMetadata: {
            title: meta.title,
            titleTemplate: meta.titleTemplate,
            description: meta.description,
            image: meta.image,
            siteLanguage: meta.siteLanguage,
            author: meta.author,
            siteUrl: meta.siteUrl,
            canonical: meta.canonical,
            twitterUsername: meta.twitterUsername,
            keywords: meta.keywords,
            ...siteMetadata,
        },
        pathPrefix,
        plugins: [
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
            "gatsby-plugin-emotion",
            "gatsby-plugin-image",
            "gatsby-plugin-theme-ui",
            "gatsby-plugin-loadable-components-ssr",
            {
                resolve: `gatsby-plugin-compile-es6-packages`,
                options: {
                    modules: ["gatsby-theme-core"],
                },
            },
            `gatsby-plugin-react-helmet`,
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: `images`,
                    path: path.join(__dirname, `src`, `images`),
                },
            },
            {
                resolve: `gatsby-plugin-manifest`,
                options: {
                    name: siteMetadata.title ? siteMetadata.title : meta.title,
                    short_name: manifest.shortName
                        ? manifest.shortName
                        : fest.shortName,
                    theme_color: manifest.themeColor
                        ? manifest.themeColor
                        : fest.themeColor,
                    background_color: manifest.backgroundColor
                        ? manifest.backgroundColor
                        : fest.backgroundColor,
                    display: "standalone",
                    scope: "/",
                    start_url: "/",
                    icon: manifest.favicon ? manifest.favicon : fest.favicon,
                    // icons: [
                    //     {
                    //         src: manifest.favicon
                    //             ? manifest.favicon
                    //             : fest.favicon,
                    //         sizes: `48x48`,
                    //         type: `image/png`,
                    //         purpose: `maskable`,
                    //     },
                    // ],
                },
            },

            // this (optional) plugin enables Progressive Web App + Offline functionality
            // To learn more, visit: https://gatsby.dev/offline
            `gatsby-plugin-offline`,
        ],
    };
};
