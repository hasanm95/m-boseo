import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import {
    PageHeader01,
    Service01,
    ProcessTab,
    Process01,
    Testimonial05,
    Client04,
    Team02,
} from "gatsby-theme-container";
import baseTheme from "../../themes/base-theme";

const AboutPage = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);
    return (
        <Layout theme={baseTheme}>
            <SEO pageName="About" />
            <Header01 hasBorder data={{ ...data.header, ...data.navigation }} />
            <PageHeader01 data={content?.["page-header-section"]} />
            <Service01
                data={content?.["service-section"]}
                spacing={2}
                sx={{ bg: "athens" }}
            />
            <ProcessTab spacing={2} data={content?.["process-tab-section"]}>
                <Process01 data={content?.["process-research-section"]} />
                <Process01 data={content?.["process-analyze-section"]} />
                <Process01 data={content?.["process-link-section"]} />
                <Process01 data={content?.["process-report-section"]} />
            </ProcessTab>
            <Testimonial05 data={content?.["testimonial-section"]} />
            <Client04 data={content?.["client-section"]} />
            <Team02 data={content?.["team-section"]} />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};
export const query = graphql`
    query AboutPageQuery {
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
        page(title: { eq: "about" }) {
            content {
                ...PageContent
            }
        }
    }
`;

AboutPage.propTypes = {
    data: PropTypes.shape({
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({}),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default AboutPage;
