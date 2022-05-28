module.exports = ({ node, actions, createNodeId }) => {
    const { createNode } = actions;

    if (
        node.internal.type === "HomepagesJson" ||
        node.internal.type === "InnerpagesJson"
    ) {
        createNode({
            id: createNodeId(`Page-${node.id}`),
            parent: node.id,
            title: node.title,
            content: node.content,
            internal: {
                type: "Page",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    if (node.internal.type === "GeneralJson") {
        createNode({
            id: createNodeId(`General-${node.id}`),
            parent: node.id,
            section: node.section,
            menu: node.menu,
            logo: node.logo,
            button: node.button,
            enable_search: node.enable_search,
            contact_info: node.contact_info,
            map: node.map,
            socials: node.socials,
            widgets: node.widgets,
            copyright_text: node.copyright_text,
            internal: {
                type: "General",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    if (node.internal.type === "ProjectsJson") {
        createNode({
            id: createNodeId(`Project-${node.id}`),
            parent: node.id,
            title: node.title,
            type: node.type,
            image: node.image,
            excerpt: node.excerpt,
            client: node.client,
            website: node.website,
            budget: node.budget,
            location: node.location,
            overview: node.overview,
            content: node.content,
            internal: {
                type: "Project",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    if (node.internal.type === "MarkdownRemark") {
        createNode({
            id: createNodeId(`Article-${node.id}`),
            parent: node.id,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            image: node.frontmatter.image,
            gallery_images: node.frontmatter.gallery_images,
            // quote_text: node.frontmatter.quote_text,
            // quote_author: node.frontmatter.quote_author,
            video_link: node.frontmatter.video_link,
            format: node.frontmatter.format,
            is_featured: node.frontmatter.is_featured,
            author: node.frontmatter.author,
            category: node.frontmatter.category,
            tags: node.frontmatter.tags,
            internal: {
                type: "Article",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    if (node.internal.type === "AuthorsJson") {
        createNode({
            id: createNodeId(`Author-${node.id}`),
            parent: node.id,
            username: node.username,
            avatar: node.avatar,
            bio: node.bio,
            socials: node.socials,
            internal: {
                type: "Author",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};
