module.exports = ({ node, actions, createNodeId }) => {
    const { createNode } = actions;

    if (!node.internal.type.startsWith("Strapi")) return;

    if (node.internal.type.endsWith("Page")) {
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

    if (
        node.internal.type === "StrapiContact" ||
        node.internal.type === "StrapiMenu" ||
        node.internal.type === "StrapiHeader01" ||
        node.internal.type === "StrapiHeader02" ||
        node.internal.type === "StrapiHeader03" ||
        node.internal.type === "StrapiHeader04" ||
        node.internal.type === "StrapiFooter01" ||
        node.internal.type === "StrapiFooter02" ||
        node.internal.type === "StrapiFooter03" ||
        node.internal.type === "StrapiFooter04"
    ) {
        createNode({
            id: createNodeId(`General-${node.id}`),
            parent: node.id,
            section: node.section,
            contact_info: node.contact_info,
            map: node.map,
            socials: node.socials,
            widgets: node.widgets,
            copyright_text: node.copyright_text,
            logo: node.logo,
            button: node.button,
            enable_search: node.enable_search,
            menu: node.menu,
            children: [],
            internal: {
                type: "General",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    if (node.internal.type === "StrapiProjects") {
        actions.createNode({
            id: createNodeId(`Project-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: node.slug,
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
    if (node.internal.type === "StrapiArticles") {
        actions.createNode({
            id: createNodeId(`Article-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: node.slug,
            date: node.published_at,
            excerpt: node.excerpt,
            content: node.content,
            format: node.blog_format,
            is_featured: node.is_featured,
            author: node.author,
            category: node.category,
            tags: node.tags,
            image: node.image,
            gallery_images: node.gallery_images,
            // quote_text: node.quote_text,
            // quote_author: node.quote_author,
            video_link: node.video_link,
            internal: {
                type: "Article",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};
