import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitle, NewsletterForm02 } from "gatsby-theme-component";
import { SectionTitleType } from "@boseo/helper/types";
import { StyledSection, StyledNewsletter, StyledShape } from "./style";

const NewsletterArea = ({ data }) => (
    <StyledSection className="newsletter-area">
        {data?.section_title && (
            <SectionTitle
                sx={{ textAlign: "center", mb: ["36px", null, "60px"] }}
                color="white"
                {...data.section_title}
            />
        )}
        <StyledNewsletter>
            <NewsletterForm02 layout={2} />
        </StyledNewsletter>
        <div className="shape-layer">
            <StyledShape layout={1}>
                <StaticImage
                    src="../../images/shape/v06.png"
                    alt="Boseo-HasTech"
                />
            </StyledShape>
            <StyledShape layout={2}>
                <StaticImage
                    src="../../images/shape/v07.png"
                    alt="Boseo-HasTech"
                />
            </StyledShape>
            <StyledShape layout={3}>
                <StaticImage
                    src="../../images/shape/v08.png"
                    alt="Boseo-HasTech"
                />
            </StyledShape>
            <StyledShape layout={4}>
                <StaticImage
                    src="../../images/shape/v09.png"
                    alt="Boseo-HasTech"
                />
            </StyledShape>
        </div>
    </StyledSection>
);

NewsletterArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
    }),
};

export default NewsletterArea;
