import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import {
    Hero01,
    Service01,
    About01,
    Divider01,
    Project01,
    ProcessTab,
    Process01,
    Testimonial01,
    Pricing01,
    Article01,
    Client01,
} from "gatsby-theme-container";
import baseTheme from "../../themes/base-theme";

const AgencyHome = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);

    return (
        <Layout theme={baseTheme}>
            <SEO pageName="Agency" />
            <Header01 data={{ ...data.header, ...data.navigation }} />
            <Hero01 data={content?.["hero-section"]} />
            <Service01 data={content?.["service-section"]} />
            <About01 data={content?.["about-section"]} />
            <Divider01 data={content?.["divider-section"]} />
            <Project01
                data={{
                    ...content?.["project-section"],
                    items: data?.allProject?.nodes,
                }}
            />
            <ProcessTab data={content?.["process-tab-section"]}>
                <Process01 data={content?.["process-research-section"]} />
                <Process01 data={content?.["process-analyze-section"]} />
                <Process01 data={content?.["process-link-section"]} />
                <Process01 data={content?.["process-report-section"]} />
            </ProcessTab>
            <Testimonial01 data={content?.["testimonial-section"]} />
            <Pricing01 data={content?.["pricing-section"]} />
            <Article01
                data={{
                    ...content?.["article-section"],
                    blogs: data?.allArticle?.nodes,
                }}
            />
            <Client01 data={content?.["client-section"]} />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query AgencyHomeQuery {
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
        page(title: { eq: "agency" }) {
            content {
                ...PageContent
            }
        }
        allProject(limit: 4) {
            nodes {
                ...Project01
            }
        }
        allArticle(limit: 5) {
            nodes {
                ...Article01
            }
        }
    }
`;

AgencyHome.propTypes = {
    data: PropTypes.shape({
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({}),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allProject: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default AgencyHome;
