/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Image } from "gatsby-theme-ui";
import { SectionTitle } from "gatsby-theme-component";
import { ImageType, SectionTitleType, TextType } from "@boseo/helper/types";
import { StyledSection, StyledThumb } from "./style";

const ProjectReport = ({ data }) => (
    <StyledSection className="report-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {data?.images?.[0]?.src && (
                        <StyledThumb>
                            <Image
                                src={data.images[0].src}
                                alt="Boseo-HasTech"
                            />
                        </StyledThumb>
                    )}
                </div>
                <div
                    className="col-lg-5 offset-lg-1"
                    sx={{ mt: ["54px", null, "60px"] }}
                >
                    {data?.section_title && (
                        <SectionTitle
                            sx={{ mb: ["20px", null, null, "42px"] }}
                            {...data.section_title}
                        />
                    )}
                    {data?.texts?.map((text) => (
                        <p key={text.content}>{text.content}</p>
                    ))}
                </div>
            </div>
        </div>
    </StyledSection>
);

ProjectReport.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        section_title: PropTypes.shape(SectionTitleType),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default ProjectReport;
