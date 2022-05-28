import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header04, Footer01 } from "gatsby-theme-layout";
import {
    Hero04,
    ContactInfo01,
    Feature01,
    About03,
    Service04,
    FunFact02,
    Project04,
    Testimonial04,
    Team01,
    Article04,
} from "gatsby-theme-container";
import businessTheme from "../../themes/business-theme";

const BusinessHome = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);

    return (
        <Layout theme={businessTheme}>
            <SEO pageName="Business" />
            <Header04
                data={{ ...data.header, ...data.navigation, ...data.contact }}
            />
            <Hero04 data={content?.["hero-section"]} />
            <ContactInfo01 data={content?.["contactinfo-section"]} />
            <Feature01 data={content?.["feature-section"]} />
            <About03 data={content?.["about-section"]} />
            <Service04 data={content?.["service-section"]} />
            <FunFact02 data={content?.["funfact-section"]} />
            <Project04
                data={{
                    ...content?.["project-section"],
                    items: data?.allProject?.nodes,
                }}
            />
            <Testimonial04 data={content?.["testimonial-section"]} />
            <Team01 data={content?.["team-section"]} />
            <Article04
                data={{
                    ...content?.["article-section"],
                    blogs: data?.allArticle?.nodes,
                }}
            />
            <Footer01 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query BusinessHomeQuery {
        header: general(section: { eq: "header-04" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu" }) {
            ...Menu01
        }
        footer: general(section: { eq: "footer-04" }) {
            ...Footer01
        }
        contact: general(section: { eq: "contact" }) {
            ...Contact01
        }
        page(title: { eq: "business" }) {
            content {
                ...PageContent
            }
        }
        allProject(limit: 3) {
            nodes {
                ...Project03
            }
        }
        allArticle(limit: 5) {
            nodes {
                ...Article01
            }
        }
    }
`;

BusinessHome.propTypes = {
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
export default BusinessHome;
