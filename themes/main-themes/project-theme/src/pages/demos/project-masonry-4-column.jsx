import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { PageHeader04, Project09 } from "gatsby-theme-container";
import ProjectImage02 from "@boseo/shared/images/m02.jpg";
import ProjectImage03 from "@boseo/shared/images/m03.jpg";
import ProjectImage04 from "@boseo/shared/images/m04.jpg";
import ProjectImage05 from "@boseo/shared/images/m05.jpg";
import ProjectImage06 from "@boseo/shared/images/m06.jpg";
import ProjectImage07 from "@boseo/shared/images/m07.jpg";
import ProjectImage08 from "@boseo/shared/images/m08.jpg";
import headerData from "@boseo/shared/constants/header-01";
import menuData from "@boseo/shared/constants/menu-01";
import footerData from "@boseo/shared/constants/footer-01";
import contactData from "@boseo/shared/constants/contact";
import theme from "../../themes";

const allContent = {
    page_header_section: {
        pageName: "Portfolio Masonry 3 Column",
    },
    project_section: {
        items: [
            {
                id: 2,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage02,
                },
            },
            {
                id: 3,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage03,
                },
            },
            {
                id: 4,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage04,
                },
            },
            {
                id: 5,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage05,
                },
            },
            {
                id: 6,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage06,
                },
            },
            {
                id: 7,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage07,
                },
            },
            {
                id: 8,
                title: "Fashion Brand StyleRevolver",
                slug: "/project/fashion-brand-stylerevolver",
                type: "Local SEO",
                excerpt:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel commodo sapien nec egestas ipsum. Vivamus sed nunc",
                image: {
                    src: ProjectImage08,
                },
            },
        ],
    },
};

const PortfolioMasonry4Column = () => (
    <Layout theme={theme}>
        <SEO pageName="Demo Project Masonry" />
        <Header01 hasBorder data={{ ...headerData, ...menuData }} />
        <PageHeader04 data={allContent.page_header_section} />
        <Project09 data={allContent.project_section} />
        <Footer01 data={{ ...footerData, ...contactData }} />
    </Layout>
);

export default PortfolioMasonry4Column;
