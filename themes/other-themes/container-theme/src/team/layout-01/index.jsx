/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ButtonType, ImageType } from "@boseo/helper/types";
import { SectionTitle } from "gatsby-theme-component";
import { Image, Button } from "gatsby-theme-ui";
import { StyledSection, StyledThumb } from "./style";

const TeamArea = ({ data }) => (
    <StyledSection className="team-area" sx={{ textAlign: "center" }}>
        {data?.section_title && (
            <SectionTitle
                title={data.section_title?.title}
                subtitle={data.section_title?.subtitle}
                desc={data.section_title?.description}
            />
        )}
        {data?.buttons?.map(({ id, path, content, ...rest }) => (
            <Button
                key={id}
                path={path}
                {...rest}
                sx={{ mt: ["31px", null, null, "40px", "71px"], zIndex: 1 }}
            >
                {content}
            </Button>
        ))}
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
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default TeamArea;
