/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ImageType } from "@boseo/helper/types";
import { SectionTitle } from "gatsby-theme-component";
import { Image } from "gatsby-theme-ui";
import { StyledSection, StyledThumb } from "./style";

const TeamArea = ({ data }) => (
    <StyledSection className="page-header-area">
        {data?.section_title && <SectionTitle {...data.section_title} />}

        {data?.images?.[0]?.src && (
            <StyledThumb>
                <Image
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Team Bg"}
                />
            </StyledThumb>
        )}
    </StyledSection>
);

TeamArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default TeamArea;
