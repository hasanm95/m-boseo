/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType } from "@boseo/helper/types";
import { SectionTitle, NewsletterForm02 } from "gatsby-theme-component";
import { StaticImage } from "gatsby-plugin-image";
import { StyledSection, StyledShape } from "./style";

const NewsletterArea = ({ data }) => (
    <StyledSection className="newsletter-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6" sx={{ mx: "auto" }}>
                    {data?.section_title && (
                        <SectionTitle
                            {...data.section_title}
                            titleStyle={2}
                            sx={{
                                textAlign: "center",
                                mb: ["20px", null, "30px", "45px"],
                            }}
                        />
                    )}
                    <NewsletterForm02 fullwidth />
                </div>
            </div>
            <StyledShape>
                <StaticImage
                    className="bg-shape-img"
                    src="../../images/shape/bg-shape-01.png"
                    alt="Boseo"
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
