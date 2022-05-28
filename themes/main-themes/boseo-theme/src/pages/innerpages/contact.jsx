import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { GoogleMap, ContactForm } from "gatsby-theme-container";
import baseTheme from "../../themes/base-theme";

const ContactPage = ({ data }) => (
    <Layout theme={baseTheme}>
        <SEO pageName="Contact" />
        <Header01 data={{ ...data.header, ...data.navigation }} />
        <GoogleMap data={{ map: data?.contact?.map }} />
        <ContactForm data={{ contact_info: data.contact?.contact_info }} />
        <Footer01 data={{ ...data?.footer, ...data?.contact }} />
    </Layout>
);

export const query = graphql`
    query ContactPageQuery {
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
            ...Contact02
        }
    }
`;

ContactPage.propTypes = {
    data: PropTypes.shape({
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({
            contact_info: PropTypes.shape({}),
            map: PropTypes.shape({}),
        }),
    }),
};
export default ContactPage;
