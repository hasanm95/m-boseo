import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader04, Article05 } from "gatsby-theme-container";
import theme from "../themes";

const BlogTagGridTemplate = ({ location, data }) => {
    const paths = location?.pathname?.split("/");
    const pageName = paths[paths.length - 1].split("-").join(" ");
    return (
        <Layout theme={theme}>
            <SEO pageName="Blog" isBlogPost />
            <Header01
                hasBorder
                data={{ ...data?.header, ...data?.navigation }}
            />
            <PageHeader04
                data={{
                    pageName,
                    type: "Tag",
                    prevList: [
                        { title: "home", path: "/" },
                        { title: "blog", path: "/blog" },
                    ],
                }}
            />
            <Article05
                data={{
                    items: data?.allArticle?.nodes,
                }}
            />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query BlogTagGridTemplateQuery($slug: String!) {
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
        allArticle(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
            nodes {
                ...Article02
            }
        }
    }
`;

BlogTagGridTemplate.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
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

export default BlogTagGridTemplate;
