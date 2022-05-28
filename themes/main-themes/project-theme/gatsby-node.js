const path = require("path");

exports.createPages = async ({ graphql, actions }, options) => {
    const { createPage } = actions;
    const { layout = "grid-2-column", postsPerPage = 6 } = options;
    const projectPage = path.resolve(
        __dirname,
        `./src/templates/project-${layout}.jsx`
    );
    const projectDetailsPage = path.resolve(
        __dirname,
        `./src/templates/project-details.jsx`
    );

    const result = await graphql(`
        {
            allProject {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    const projects = result.data.allProject.nodes;
    const numberOfPages = Math.ceil(projects.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, index) => {
        const isFirstPage = index === 0;
        const currentPage = index + 1;

        createPage({
            path: isFirstPage ? "project" : `project/page/${currentPage}`,
            component: projectPage,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                currentPage,
                numberOfPages,
            },
        });
    });
    projects.forEach((node) => {
        createPage({
            path: node.slug,
            component: projectDetailsPage,
            context: {
                slug: node.slug,
            },
        });
    });
};
