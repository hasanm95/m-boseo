import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { BlogDetails01 } from "gatsby-theme-container";
import BlogImage from "@boseo/shared/images/g01.jpg";
import authorImg from "@boseo/shared/images/team-1.jpg";
import headerData from "@boseo/shared/constants/header-01";
import menuData from "@boseo/shared/constants/menu-01";
import footerData from "@boseo/shared/constants/footer-01";
import contactData from "@boseo/shared/constants/contact";
import theme from "../../themes";

const allContent = {
    article: {
        id: 1,
        title: "5 Steps for Competing with Digital Goliaths",
        slug: "5-Steps-for-Competing-with-Digital-Goliaths",
        format: "image",
        author: {
            name: "Admin",
            slug: "admin",
            designation: "web developer",
            image: { src: authorImg },
            bio: "She is a lawyer, podcaster, speaker, and writer. Se helps develop HasThemes premium training products.",
            socials: [
                {
                    id: 1,
                    title: "facebook",
                    link: "https://facebook.com",
                    icon: "fa fa-facebook",
                },
                {
                    id: 2,
                    title: "twitter",
                    link: "https://twitter.com",
                    icon: "fa fa-twitter",
                },
                {
                    id: 3,
                    title: "linkedin",
                    link: "https://linkedin.com",
                    icon: "fa fa-linkedin",
                },
                {
                    id: 4,
                    title: "dribbble",
                    link: "https://dribbble.com",
                    icon: "fa fa-dribbble",
                },
            ],
        },
        date: "08 July 2020",
        category: {
            title: "Google Ads",
            slug: "google-ads",
        },
        tags: [
            {
                title: "Digital",
                slug: "digital",
            },
            {
                title: "Growth Hack",
                slug: "growth-hack",
            },
            {
                title: "Business",
                slug: "business",
            },
        ],
        image: {
            src: BlogImage,
        },
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor at purus id molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
};

const SingleBlog = () => (
    <Layout theme={theme}>
        <SEO pageName="Demo Blog Details" />
        <Header01 hasBorder data={{ ...headerData, ...menuData }} />
        <main className="main-content">
            <BlogDetails01
                data={{
                    ...allContent.article,
                    siteUrl: "https://boseo-gatsby.netlify.app/",
                }}
            />
        </main>
        <Footer01 data={{ ...footerData, ...contactData }} />
    </Layout>
);

export default SingleBlog;
