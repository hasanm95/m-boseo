import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { BlogDetails01 } from "gatsby-theme-container";
import theme from "../themes";

const BlogDetailsTemplate = ({ data }) => (
    <Layout theme={theme}>
        <SEO pageName="Blog" isBlogPost />
        <Header01 hasBorder data={{ ...data?.header, ...data?.navigation }} />
        <main className="main-content">
            <BlogDetails01
                data={{
                    ...data.article,
                    siteUrl: data.site.siteMetadata.siteUrl,
                }}
            />
        </main>
        <Footer01 data={{ ...data?.footer, ...data?.contact }} />
    </Layout>
);

export const query = graphql`
    query BlogDetailsTemplateQuery($slug: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
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
        article(slug: { eq: $slug }) {
            ...ArticleDetails
        }
    }
`;

BlogDetailsTemplate.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string,
            }),
        }),
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({}),
        article: PropTypes.shape({}),
    }),
};

export default BlogDetailsTemplate;
