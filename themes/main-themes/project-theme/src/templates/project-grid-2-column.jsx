import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader04, Project05 } from "gatsby-theme-container";
import theme from "../themes";

const ProjectTemplate = ({ pageContext, location, data }) => {
    const { currentPage, numberOfPages } = pageContext;
    const pageName = location?.pathname?.split("/")[1];
    return (
        <Layout theme={theme}>
            <SEO pageName="Project" />
            <Header01
                hasBorder
                data={{ ...data?.header, ...data?.navigation }}
            />
            <PageHeader04 data={{ pageName }} />
            <Project05
                data={{
                    items: data?.allProject?.nodes,
                    pagination: {
                        rootPage: "/project",
                        currentPage,
                        numberOfPages,
                    },
                }}
            />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query ProjectGrid2TemplateQuery($skip: Int!, $limit: Int!) {
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
        allProject(limit: $limit, skip: $skip) {
            nodes {
                ...Project01
            }
        }
    }
`;

ProjectTemplate.propTypes = {
    pageContext: PropTypes.shape({
        currentPage: PropTypes.number,
        numberOfPages: PropTypes.number,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    data: PropTypes.shape({
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({}),
        allProject: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default ProjectTemplate;
