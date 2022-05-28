import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { Article07 } from "gatsby-theme-container";
import theme from "../themes";

const BlogSearchGridTemplate = ({ location, data }) => {
    const blogs = data.allArticle.nodes || [];
    const { state } = location;
    const query = state && state.query;

    let filteredBlogs = [];
    if (state) {
        filteredBlogs = blogs.filter((post) => {
            const {
                title,
                category: { title: catTitle },
                tags,
                content,
                author,
            } = post;

            const tagList = tags.map((tag) => tag.name);
            const authorName = author?.name;

            return (
                (title && title.toLowerCase().includes(query)) ||
                (content && content.toLowerCase().includes(query)) ||
                (authorName && authorName.toLowerCase().includes(query)) ||
                (tagList &&
                    tagList
                        .join("")
                        .toLowerCase()
                        .includes(query.toLowerCase())) ||
                (catTitle &&
                    catTitle.toLowerCase().includes(query.toLowerCase()))
            );
        });
    }

    return (
        <Layout theme={theme}>
            <SEO pageName="Search" />
            <Header01
                hasBorder
                data={{ ...data?.header, ...data?.navigation }}
            />
            <Article07 data={{ items: filteredBlogs, query }} />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query BlogSearchGridTemplateQuery {
        header: general(section: { eq: "header-01" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu" }) {
            ...Menu01
        }
        footer: general(section: { eq: "footer-01" }) {
            ...Footer01
        }
        contact: general(section: { eq: "contact" }) {
            ...Contact01
        }
        allArticle {
            nodes {
                ...Article03
            }
        }
    }
`;

BlogSearchGridTemplate.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            query: PropTypes.string,
        }),
    }),
    data: PropTypes.shape({
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({}),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default BlogSearchGridTemplate;
