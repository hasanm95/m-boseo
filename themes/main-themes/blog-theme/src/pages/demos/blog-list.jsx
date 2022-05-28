import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader04, Article06 } from "gatsby-theme-container";
import BlogImage from "@boseo/shared/images/hx01.jpg";
import headerData from "@boseo/shared/constants/header-01";
import menuData from "@boseo/shared/constants/menu-01";
import footerData from "@boseo/shared/constants/footer-01";
import contactData from "@boseo/shared/constants/contact";
import theme from "../../themes";

const allContent = {
    page_header_section: {
        pageName: "Blog Listing",
    },
    article_section: {
        items: [
            {
                id: 1,
                title: "5 Steps for Competing with Digital Goliaths",
                slug: "/smashing-podcast-episode-43-with-matthew-phillips",
                author: {
                    name: "Admin",
                    slug: "admin",
                },
                date: "08 July 2020",
                image: {
                    src: BlogImage,
                },
                format: "image",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor at purus id molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            },
            {
                id: 2,
                title: "5 Steps for Competing with Digital Goliaths",
                slug: "/smashing-podcast-episode-43-with-matthew-phillips",
                author: {
                    name: "Admin",
                    slug: "admin",
                },
                date: "08 July 2020",
                image: {
                    src: BlogImage,
                },
                format: "image",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor at purus id molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            },
            {
                id: 3,
                title: "5 Steps for Competing with Digital Goliaths",
                slug: "/smashing-podcast-episode-43-with-matthew-phillips",
                author: {
                    name: "Admin",
                    slug: "admin",
                },
                date: "08 July 2020",
                image: {
                    src: BlogImage,
                },
                format: "image",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor at purus id molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            },
            {
                id: 4,
                title: "5 Steps for Competing with Digital Goliaths",
                slug: "/smashing-podcast-episode-43-with-matthew-phillips",
                author: {
                    name: "Admin",
                    slug: "admin",
                },
                date: "08 July 2020",
                image: {
                    src: BlogImage,
                },
                format: "image",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor at purus id molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            },
        ],
    },
};

const BlogListing = () => (
    <Layout theme={theme}>
        <SEO pageName="Demo Blog List" />
        <Header01 hasBorder data={{ ...headerData, ...menuData }} />
        <PageHeader04 data={allContent.page_header_section} />
        <Article06 data={allContent.article_section} />
        <Footer01 data={{ ...footerData, ...contactData }} />
    </Layout>
);

export default BlogListing;
