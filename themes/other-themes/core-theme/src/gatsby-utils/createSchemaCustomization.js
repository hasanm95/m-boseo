const {
    pageDefs,
    contentDefs,
    projectDefs,
    articleDefs,
    authorDefs,
    generalDefs,
    siteDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        pageDefs,
        contentDefs,
        projectDefs,
        articleDefs,
        authorDefs,
        generalDefs,
        siteDefs,
    ];

    createTypes(allTypeDefs);
};
