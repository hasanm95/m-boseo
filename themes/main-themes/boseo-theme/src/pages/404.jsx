import React from "react";
import { SEO } from "gatsby-theme-core";
import { Layout, Header01, Footer01 } from "gatsby-theme-layout";
import { ErrorNotFound } from "gatsby-theme-container";

const ErrorPage = () => (
    <Layout>
        <SEO pageName="404" />
        <Header01 hasBorder />
        <ErrorNotFound />
        <Footer01 />
    </Layout>
);

export default ErrorPage;
