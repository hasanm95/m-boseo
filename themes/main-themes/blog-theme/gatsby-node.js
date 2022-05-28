const path = require("path");

exports.createPages = async ({ graphql, actions }, options) => {
    const { createPage } = actions;
    const { layout = "grid", postsPerPage = 6 } = options;
    const blogPage = path.resolve(
        __dirname,
        `./src/templates/blog-${layout}.jsx`
    );
    const blogDetailsPage = path.resolve(
        __dirname,
        `./src/templates/blog-details.jsx`
    );
    const blogCatPage = path.resolve(
        __dirname,
        `./src/templates/blog-category-${layout}.jsx`
    );
    const blogTagPage = path.resolve(
        __dirname,
        `./src/templates/blog-tag-${layout}.jsx`
    );
    const blogAuthorPage = path.resolve(
        __dirname,
        `./src/templates/blog-author-${layout}.jsx`
    );

    const blogSearchPage = path.resolve(
        __dirname,
        `./src/templates/blog-search-${layout}.jsx`
    );

    const result = await graphql(`
        {
            allArticle {
                nodes {
                    slug
                    category {
                        slug
                    }
                    tags {
                        slug
                    }
                    author {
                        slug
                    }
                }
            }
        }
    `);

    // Blog Page width pagination
    const posts = result.data.allArticle.nodes;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, index) => {
        const isFirstPage = index === 0;
        const currentPage = index + 1;

        createPage({
            path: isFirstPage ? "blog" : `blog/page/${currentPage}`,
            component: blogPage,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                currentPage,
                numberOfPages,
            },
        });
    });

    // Single Blog
    posts.forEach((node) => {
        createPage({
            path: node.slug,
            component: blogDetailsPage,
            context: {
                slug: node.slug,
            },
        });
    });

    // Meta Pages
    let tags = [];
    let categories = [];
    let authors = [];
    posts.forEach((node) => {
        if (node.category) {
            categories.push(node.category.slug);
        }
        if (node.tags) {
            tags = tags.concat(node.tags.map((tag) => tag.slug));
        }
        if (node.author) {
            authors.push(node.author.slug);
        }
    });

    // Create Categories Page

    categories = [...new Set(categories)];
    categories.forEach((category) => {
        createPage({
            path: category,
            component: blogCatPage,
            context: {
                slug: category,
            },
        });
    });

    // Create tags page
    tags = [...new Set(tags)];
    tags.forEach((tag) => {
        createPage({
            path: tag,
            component: blogTagPage,
            context: {
                slug: tag,
            },
        });
    });

    // Author tags page
    authors = [...new Set(authors)];
    authors.forEach((author) => {
        createPage({
            path: author,
            component: blogAuthorPage,
            context: {
                slug: author,
            },
        });
    });

    // Create Search Page
    createPage({
        path: "/search",
        component: blogSearchPage,
    });
};
