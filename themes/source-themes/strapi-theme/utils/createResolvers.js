/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const remarkParse = require("remark-parse");
const imgLinks = require("@pondorasti/remark-img-links");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const unified = require("unified");
const { slugify, demoAuthor } = require("./utils");

function processGatsbyImage(
    api,
    image,
    store,
    cache,
    createNode,
    createNodeId,
    reporter
) {
    return {
        src: createRemoteFileNode({
            url: /^\/(?!\/)/.test(image.url) ? `${api}${image.url}` : image.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
        }),
        alt: image.alternativeText,
    };
}

module.exports = (
    { actions, cache, createNodeId, createResolvers, store, reporter },
    options
) => {
    const { createNode } = actions;
    const resolvers = {
        General: {
            logo: {
                resolve: (source) =>
                    source.logo &&
                    source.logo.map((img) =>
                        img && img.url
                            ? processGatsbyImage(
                                  options.apiURL,
                                  img,
                                  store,
                                  cache,
                                  createNode,
                                  createNodeId,
                                  reporter
                              )
                            : null
                    ),
            },
            contact_info: {
                resolve: (source) => ({
                    ...source.contact_info,
                    address: `${source.contact_info.street}, ${source.contact_info.state}, ${source.contact_info.country}`,
                }),
            },
        },
        Page: {
            content: {
                resolve: (source) => {
                    const content = source.content.map((part) => ({
                        ...part,
                        items:
                            part &&
                            part.items &&
                            part.items.map((item) => ({
                                ...item,
                                images:
                                    item &&
                                    item.images &&
                                    item.images.map((img) =>
                                        img && img.url
                                            ? processGatsbyImage(
                                                  options.apiURL,
                                                  img,
                                                  store,
                                                  cache,
                                                  createNode,
                                                  createNodeId,
                                                  reporter
                                              )
                                            : null
                                    ),
                            })),
                        images:
                            part &&
                            part.images &&
                            part.images.map((img) =>
                                img && img.url
                                    ? processGatsbyImage(
                                          options.apiURL,
                                          img,
                                          store,
                                          cache,
                                          createNode,
                                          createNodeId,
                                          reporter
                                      )
                                    : null
                            ),
                        section_title: {
                            ...part.section_title,
                            image:
                                part &&
                                part.section_title &&
                                part.section_title.image &&
                                part.section_title.image.url
                                    ? processGatsbyImage(
                                          options.apiURL,
                                          part.section_title.image,
                                          store,
                                          cache,
                                          createNode,
                                          createNodeId,
                                          reporter
                                      )
                                    : null,
                        },
                    }));
                    return content;
                },
            },
        },
        Project: {
            slug: {
                resolve: (source) => `/project/${source.slug}`,
            },
            image: {
                resolve: (source) =>
                    source && source.image
                        ? processGatsbyImage(
                              options.apiURL,
                              source.image,
                              store,
                              cache,
                              createNode,
                              createNodeId,
                              reporter
                          )
                        : null,
            },
            content: {
                resolve: (source) => {
                    const content = source.content.map((part) => ({
                        ...part,
                        items:
                            part &&
                            part.items &&
                            part.items.map((item) => ({
                                ...item,
                                images:
                                    item &&
                                    item.images &&
                                    item.images.map((img) =>
                                        img && img.url
                                            ? processGatsbyImage(
                                                  options.apiURL,
                                                  img,
                                                  store,
                                                  cache,
                                                  createNode,
                                                  createNodeId,
                                                  reporter
                                              )
                                            : null
                                    ),
                            })),
                        images:
                            part &&
                            part.images &&
                            part.images.map((img) =>
                                img && img.url
                                    ? processGatsbyImage(
                                          options.apiURL,
                                          img,
                                          store,
                                          cache,
                                          createNode,
                                          createNodeId,
                                          reporter
                                      )
                                    : null
                            ),
                    }));
                    return content;
                },
            },
        },
        Article: {
            slug: {
                resolve: (source) => `/${source.slug}`,
            },
            category: {
                resolve: (source) => ({
                    title: source.category.title,
                    slug: `/category/${source.category.slug}`,
                }),
            },
            tags: {
                resolve: (source) =>
                    source.tags.map((tag) => ({
                        title: tag.title,
                        slug: `/tag/${tag.slug}`,
                    })),
            },
            image: {
                resolve: (source) =>
                    source && source.image && source.image.url
                        ? processGatsbyImage(
                              options.apiURL,
                              source.image,
                              store,
                              cache,
                              createNode,
                              createNodeId,
                              reporter
                          )
                        : null,
            },
            gallery_images: {
                resolve: (source) =>
                    source.gallery_images &&
                    source.gallery_images.map((img) =>
                        img && img.url
                            ? processGatsbyImage(
                                  options.apiURL,
                                  img,
                                  store,
                                  cache,
                                  createNode,
                                  createNodeId,
                                  reporter
                              )
                            : null
                    ),
            },
            content: {
                resolve: (source) => {
                    const { content } = source;
                    const stringContent =
                        JSON.stringify(
                            unified()
                                .use(remarkParse)
                                .use(imgLinks, { absolutePath: options.apiURL })
                                .use(remarkRehype, { allowDangerousHtml: true })
                                .use(rehypeRaw)
                                .use(rehypeStringify)
                                .processSync(content)
                        ) || "";
                    const parsedContent = JSON.parse(stringContent);
                    return parsedContent.contents || "";
                },
            },
            author: {
                resolve: (source) => {
                    const slug = `/author/${source.author.slug}`;

                    const avatar =
                        source.author &&
                        source.author.avatar &&
                        source.author.avatar.url
                            ? processGatsbyImage(
                                  options.apiURL,
                                  source.author.avatar,
                                  store,
                                  cache,
                                  createNode,
                                  createNodeId,
                                  reporter
                              )
                            : null;
                    return {
                        ...source.author,
                        avatar,
                        slug,
                    };
                },
            },
        },
    };
    createResolvers(resolvers);
};
