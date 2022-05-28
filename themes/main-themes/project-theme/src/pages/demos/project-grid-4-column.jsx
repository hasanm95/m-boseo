import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader04, Project07 } from "gatsby-theme-container";
import ProjectImage from "@boseo/shared/images/01.jpg";
import headerData from "@boseo/shared/constants/header-01";
import menuData from "@boseo/shared/constants/menu-01";
import footerData from "@boseo/shared/constants/footer-01";
import contactData from "@boseo/shared/constants/contact";
import theme from "../../themes";

const allContent = {
    page_header_section: {
        pageName: "Portfolio Masonry 4 Column",
    },
    project_section: {
        items: [
            {
                id: 1,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 2,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 3,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 4,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 5,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 6,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 7,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 8,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
        ],
    },
};

const PortfolioGrid4Column = () => (
    <Layout theme={theme}>
        <SEO pageName="Demo Project Grid" />
        <Header01 hasBorder data={{ ...headerData, ...menuData }} />
        <PageHeader04 data={allContent.page_header_section} />
        <Project07 data={allContent.project_section} />
        <Footer01 data={{ ...footerData, ...contactData }} />
    </Layout>
);

export default PortfolioGrid4Column;
