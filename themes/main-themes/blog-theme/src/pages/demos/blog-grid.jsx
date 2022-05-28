import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader04, Article05 } from "gatsby-theme-container";
import BlogImage from "@boseo/shared/images/p02.jpg";
import headerData from "@boseo/shared/constants/header-01";
import menuData from "@boseo/shared/constants/menu-01";
import footerData from "@boseo/shared/constants/footer-01";
import contactData from "@boseo/shared/constants/contact";
import theme from "../../themes";

const allContent = {
    page_header_section: {
        pageName: "Blog Grid",
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
            },
            {
                id: 5,
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
            },
            {
                id: 6,
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
            },
        ],
    },
};

const Blog = () => (
    <Layout theme={theme}>
        <SEO pageName="Demo Blog Grid" />
        <Header01 hasBorder data={{ ...headerData, ...menuData }} />
        <PageHeader04 data={allContent.page_header_section} />
        <Article05 data={allContent.article_section} />
        <Footer01 data={{ ...footerData, ...contactData }} />
    </Layout>
);

export default Blog;
