import React from "react";
import { SectionTitle, FaqForm } from "gatsby-theme-component";
import { StyledSection } from "./style";

const FaqFormArea = () => (
    <StyledSection className="faq-form-area">
        <div className="container">
            <SectionTitle
                sx={{ mb: ["37px", null, "54px", "73px"], textAlign: "center" }}
                title="Submit Your Question"
            />
            <FaqForm />
        </div>
    </StyledSection>
);

export default FaqFormArea;
