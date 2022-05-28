import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import {
    PageHeader04,
    ProjectOverview,
    ProjectReport,
    Testimonial01,
    Project10,
} from "gatsby-theme-container";
import theme from "../themes";

const ProjectDetailsTemplate = ({ data, location }) => {
    const paths = location?.pathname?.split("/");
    const pageName = paths[paths.length - 1].split("-").join(" ");
    const { content: alldata, ...frontmatter } = data?.project;
    const content = normalizedData(alldata || []);

    return (
        <Layout theme={theme}>
            <SEO pageName="Project" />
            <Header01
                hasBorder
                data={{ ...data?.header, ...data?.navigation }}
            />
            <PageHeader04
                data={{
                    pageName,
                    prevList: [
                        { title: "Home", path: "/" },
                        { title: paths[1], path: `/${paths[1]}` },
                    ],
                }}
            />
            <ProjectOverview data={frontmatter} />
            <ProjectReport data={content?.["project-report"]} />
            <Testimonial01 data={content?.["testimonial-section"]} />
            <Project10
                data={{
                    ...content?.["related-section"],
                    items: data?.allProject?.nodes,
                }}
            />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query ProjectDetailsTemplateQuery($slug: String!) {
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
        allProject(filter: { slug: { ne: $slug } }) {
            nodes {
                ...Project01
            }
        }
        project(slug: { eq: $slug }) {
            ...ProjectDetails
        }
    }
`;

ProjectDetailsTemplate.propTypes = {
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
        project: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default ProjectDetailsTemplate;
