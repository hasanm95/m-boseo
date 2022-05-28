import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StyledSection, StyledTitle, StyledDesc } from "./style";

const ErrorArea = () => (
    <StyledSection className="page-not-found-area">
        <div className="container">
            <StaticImage src="../images/page-not-found.png" alt="Error 404" />
            <StyledTitle>Ohhh! Page Not Found</StyledTitle>
            <StyledDesc>
                It seems we can not find what you are looking for. Perhaps
                searching can help or go back to <Link to="/">Homepage.</Link>
            </StyledDesc>
        </div>
    </StyledSection>
);

export default ErrorArea;
