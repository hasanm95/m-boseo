/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const { slugify, demoAuthor } = require("./utils");

module.exports = ({ createResolvers }) => {
    const resolvers = {
        Project: {
            slug: {
                resolve: (source) => `/project/${slugify(source.title)}`,
            },
        },
        Author: {
            slug: {
                resolve: (source) => `/author/${slugify(source.username)}`,
            },
        },
        Article: {
            slug: {
                resolve: (source) => `/${slugify(source.title)}`,
            },
            category: {
                resolve: (source) => ({
                    title: source.category,
                    slug: `/category/${slugify(source.category)}`,
                }),
            },
            tags: {
                resolve: (source) =>
                    source.tags.map((tag) => ({
                        title: tag,
                        slug: `/tag/${slugify(tag)}`,
                    })),
            },
            // author: {
            //     resolve: (source, _args, context, _info) => {
            //         const authors = context.nodeModel.getAllNodes({
            //             type: `Author`,
            //         });
            //         const author = authors.find(
            //             (au) => au.name === source.author
            //         );
            //         return author;
            //     },
            // },
            excerpt: {
                resolve: async (source, _args, context, info) => {
                    await context.nodeModel.prepareNodes(
                        info.parentType,
                        { parent: { excerpt: true } },
                        { parent: { excerpt: true } },
                        [info.parentType.name]
                    );
                    const newSource = context.nodeModel.getNodeById({
                        id: source.id,
                    });
                    return newSource.__gatsby_resolved.parent.excerpt;
                },
            },
            content: {
                resolve: async (source, _args, context, info) => {
                    await context.nodeModel.prepareNodes(
                        info.parentType,
                        { parent: { html: true } },
                        { parent: { html: true } },
                        [info.parentType.name]
                    );
                    const newSource = context.nodeModel.getNodeById({
                        id: source.id,
                    });
                    return newSource.__gatsby_resolved.parent.html;
                },
            },
        },
        General: {
            contact_info: {
                resolve: (source) => ({
                    ...source.contact_info,
                    address: `${source.contact_info.street}, ${source.contact_info.state}, ${source.contact_info.country}`,
                }),
            },
        },
    };
    createResolvers(resolvers);
};
