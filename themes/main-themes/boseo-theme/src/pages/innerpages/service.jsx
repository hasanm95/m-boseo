import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import {
    PageHeader04,
    Divider03,
    Service01,
    Pricing03,
    Newsletter02,
    Faq02,
} from "gatsby-theme-container";
import baseTheme from "../../themes/base-theme";

const ServicePage = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);

    return (
        <Layout theme={baseTheme}>
            <SEO pageName="Service" />
            <Header01 hasBorder data={{ ...data.header, ...data.navigation }} />
            <PageHeader04 data={content?.["page-header-section"]} />
            <Divider03 data={content?.["divider-section"]} />
            <Service01
                sx={{ bg: "athens" }}
                data={content?.["service-section"]}
            />
            <Pricing03 data={content?.["pricing-section"]} />
            <Newsletter02 data={content?.["newsletter-section"]} />
            <Faq02 data={content?.["faq-section"]} />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query ServicePageQuery {
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
        page(title: { eq: "service" }) {
            content {
                ...PageContent
            }
        }
    }
`;

ServicePage.propTypes = {
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

export default ServicePage;
