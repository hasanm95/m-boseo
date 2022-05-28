/* eslint-disable prettier/prettier */
const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
const options = require("./site-config/theme-options");

exports.onCreatePage = ({ page, actions }, { themeOptions }) => {
    const { deletePage, createPage } = actions;
    const opt = { ...options, ...themeOptions };
    const { deleteThisPages, deafultHome, mode, theme } = opt;
    const pagePath = page.path.slice(0, -1);
    const homePage = pagePath.split("/homepages")[1];
    const innerPage = pagePath.split("/innerpages")[1];
    const demoPage = pagePath.split("/demos")[1];

    if (deleteThisPages.includes(pagePath)) {
        deletePage(page);
    }
    if (homePage === deafultHome) {
        deletePage(page);
        createPage({
            ...page,
            path: "/",
            context: {
                theme,
                ...page.context,
            },
        });
    }

    if (innerPage) {
        deletePage(page);
        createPage({
            ...page,
            path: `${innerPage}`,
            context: {
                theme,
                ...page.context,
            },
        });
    }

    if (mode === "production") {
        if (homePage && homePage !== deafultHome) {
            deletePage(page);
        }
        if (demoPage) {
            deletePage(page);
        }
    }
};

exports.createSchemaCustomization = createSchemaCustomization;
