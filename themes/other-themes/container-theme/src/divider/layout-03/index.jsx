/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitle } from "gatsby-theme-component";
import { Image } from "gatsby-theme-ui";
import { SectionTitleType, ImageType } from "@boseo/helper/types";
import { StyledSection, StyledThumb } from "./style";

const DividerArea = ({ data }) => (
    <StyledSection className="divider-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-10" sx={{ m: "auto" }}>
                    {data?.section_title && (
                        <SectionTitle
                            sx={{ textAlign: "center" }}
                            {...data.section_title}
                        />
                    )}
                    {data?.images?.[0].src && (
                        <StyledThumb className="thumb">
                            <Image
                                className="w-100"
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "boseo"}
                            />
                        </StyledThumb>
                    )}
                </div>
            </div>
        </div>
    </StyledSection>
);

DividerArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default DividerArea;
