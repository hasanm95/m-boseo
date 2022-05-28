import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@boseo/helper/methods";
import { SEO } from "gatsby-theme-core";
import { Layout, Header03, Footer03 } from "gatsby-theme-layout";
import {
    Hero03,
    Service03,
    About02,
    FunFact01,
    Project03,
    Testimonial03,
    Client03,
    Pricing02,
    Divider02,
    Article03,
    Newsletter01,
} from "gatsby-theme-container";
import seoTheme from "../../themes/seo-theme";

const SeoHome = ({ data }) => {
    const content = normalizedData(data?.page?.content || []);

    return (
        <Layout theme={seoTheme}>
            <SEO pageName="SEO" />
            <Header03
                data={{ ...data.header, ...data.navigation, ...data.contact }}
            />
            <Hero03 data={content?.["hero-section"]} />
            <Service03 data={content?.["service-section"]} />
            <About02 data={content?.["about-section"]} />
            <FunFact01 data={content?.["funfact-section"]} />
            <Project03
                data={{
                    ...content?.["project-section"],
                    items: data?.allProject?.nodes,
                }}
            />
            <Testimonial03 data={content?.["testimonial-section"]} />
            <Client03 data={content?.["client-section"]} />
            <Pricing02 data={content?.["pricing-section"]} />
            <Divider02 data={content?.["divider-section"]} />
            <Article03
                data={{
                    ...content?.["article-section"],
                    blogs: data?.allArticle?.nodes,
                }}
            />
            <Newsletter01 data={content?.["newsletter-section"]} />
            <Footer03 data={{ ...data?.footer, ...data?.contact }} />
        </Layout>
    );
};

export const query = graphql`
    query SeoHomeQuery {
        header: general(section: { eq: "header-03" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu" }) {
            ...Menu01
        }
        footer: general(section: { eq: "footer-03" }) {
            ...Footer01
        }
        contact: general(section: { eq: "contact" }) {
            ...Contact01
        }
        page(title: { eq: "seo" }) {
            content {
                ...PageContent
            }
        }
        allProject {
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

SeoHome.propTypes = {
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
export default SeoHome;
