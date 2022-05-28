import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import {
    PageHeader04,
    ProjectOverview,
    ProjectReport,
    Testimonial01,
    Project10,
} from "gatsby-theme-container";
import ProjectImage from "@boseo/shared/images/d01.jpg";
import ReportImage from "@boseo/shared/images/v05.png";
import Avatar01 from "@boseo/shared/images/s02.jpg";
import headerData from "@boseo/shared/constants/header-01";
import menuData from "@boseo/shared/constants/menu-01";
import footerData from "@boseo/shared/constants/footer-01";
import contactData from "@boseo/shared/constants/contact";
import theme from "../../themes";

const allContent = {
    page_header_section: {
        pageName: "Fashion Brand StyleRevolver",
    },
    project_overview: {
        image: { src: ProjectImage },
        title: "Fashion Brand StyleRevolver",
        type: "Local SEO",
        client: "Fashion Brand StyleRevolver",
        website: "https://example.com",
        budget: "$2000 - $3000",
        location: "Bangladesh",
        overview: [
            {
                content:
                    "Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.",
            },
        ],
    },
    project_report: {
        section_title: { title: "SEO Analysis Report" },
        texts: [
            {
                id: 1,
                content:
                    "In order to keep a track of the Social Media Performance of your projects, this report will do just fine. This SMO Specific report analyses your presence on different Social Media platforms covering all important metrics and permitting you to filter from the platforms you wish to see along with the metrics finalized",
            },
            {
                id: 2,
                content:
                    "This report helps up in analyzing the status of your project with all the analytical details and link management activities. Just by a quick glance, one can have an idea of how the project is going.",
            },
        ],
        images: [{ src: ReportImage }],
    },
    testimonial_section: {
        section_title: {
            subtitle: "WHAT OUR CLIENTS SAY",
        },
        items: [
            {
                id: 1,
                title: "Julia Steve",
                designation: "Manager",
                company: "Spotify LLC",
                description:
                    "We’ve been with higher visibility for about two months now and with the help of our account manager Lauren Moscato, we’ve been able to improve our website and rankings dramatically. We will be continuing business with them and are excited to see what’s to come.",
                images: [
                    {
                        src: Avatar01,
                    },
                ],
            },
            {
                id: 2,
                title: "Julia Smith",
                designation: "Manager",
                company: "Spotify LLC",
                description:
                    "We’ve been with higher visibility for about two months now and with the help of our account manager Lauren Moscato, we’ve been able to improve our website and rankings dramatically. We will be continuing business with them and are excited to see what’s to come.",
                images: [
                    {
                        src: Avatar01,
                    },
                ],
            },
        ],
    },
    project_section: {
        section_title: {
            title: "Related Projects",
        },
        items: [
            {
                id: 1,
                title: "Fashion Brand StyleRevolver",
                slug: "fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 2,
                title: "Fashion Brand StyleRevolver",
                slug: "fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 3,
                title: "Fashion Brand StyleRevolver",
                slug: "fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
            {
                id: 4,
                title: "Fashion Brand StyleRevolver",
                slug: "fashion-brand-stylerevolver",
                type: "Local SEO",
                image: {
                    src: ProjectImage,
                },
            },
        ],
    },
};

const ProjectDetails = () => (
    <Layout theme={theme}>
        <SEO pageName="Demo Project Details" />
        <Header01 hasBorder data={{ ...headerData, ...menuData }} />
        <PageHeader04 data={allContent.page_header_section} />
        <ProjectOverview data={allContent.project_overview} />
        <ProjectReport data={allContent.project_report} />
        <Testimonial01 data={allContent.testimonial_section} />
        <Project10 data={allContent.project_section} />
        <Footer01 data={{ ...footerData, ...contactData }} />
    </Layout>
);

export default ProjectDetails;
