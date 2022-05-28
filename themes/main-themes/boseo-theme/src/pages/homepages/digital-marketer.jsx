import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header02, Footer02 } from "gatsby-theme-layout";
import {
    Hero02,
    Client02,
    Award01,
    Service02,
    Process02,
    Project02,
    Testimonial02,
    Article02,
} from "gatsby-theme-container";
import baseTheme from "../../themes/base-theme";

const DigitalMarketerHome = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);
    return (
        <Layout theme={baseTheme}>
            <SEO pageName="Digital Marketer" />
            <Header02
                data={{
                    ...data.header,
                    ...data.navigation,
                    contact_info: data.contact?.contact_info,
                }}
            />
            <Hero02 data={content?.["hero-section"]} />
            <Client02 data={content?.["client-section"]} />
            <Award01 data={content?.["award-section"]} />
            <Service02 data={content?.["service-section"]} />
            <Process02 data={content?.["process-section"]} />
            <Project02
                data={{
                    ...content?.["project-section"],
                    items: data?.allProject?.nodes,
                }}
            />
            <Testimonial02 data={content?.["testimonial-section"]} />
            <Article02
                data={{
                    ...content?.["article-section"],
                    blogs: data?.allArticle?.nodes,
                }}
            />
            <Footer02
                data={{ ...data.footer, socials: data.contact?.socials }}
            />
        </Layout>
    );
};

export const query = graphql`
    query DigitalMarketerHomeQuery {
        header: general(section: { eq: "header-02" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu" }) {
            ...Menu01
        }
        footer: general(section: { eq: "footer-02" }) {
            ...Footer01
        }
        contact: general(section: { eq: "contact" }) {
            ...Contact01
        }
        page(title: { eq: "digital-marketer" }) {
            content {
                ...PageContent
            }
        }
        allProject {
            nodes {
                ...Project01
            }
        }
        allArticle(limit: 5) {
            nodes {
                ...Article02
            }
        }
    }
`;

DigitalMarketerHome.propTypes = {
    data: PropTypes.shape({
        header: PropTypes.shape({}),
        navigation: PropTypes.shape({}),
        footer: PropTypes.shape({}),
        contact: PropTypes.shape({
            contact_info: PropTypes.shape({}),
            socials: PropTypes.arrayOf(PropTypes.shape({})),
        }),
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

export default DigitalMarketerHome;
