import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader02, Team03 } from "gatsby-theme-container";
import baseTheme from "../../themes/base-theme";

const TeamPage = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);
    return (
        <Layout theme={baseTheme}>
            <SEO pageName="Team" />
            <Header01 data={{ ...data.header, ...data.navigation }} />
            <PageHeader02 data={content?.["page-header-section"]} />
            <Team03 data={content?.["team-section"]} />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query TeamPageQuery {
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
        page(title: { eq: "team" }) {
            content {
                ...PageContent
            }
        }
    }
`;

TeamPage.propTypes = {
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

export default TeamPage;
