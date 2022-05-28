/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { BreadCrumb01 } from "gatsby-theme-component";
import { Image } from "gatsby-theme-ui";
import { HeadingType, TextType, ImageType } from "@boseo/helper/types";
import { StyledSection, StyledContent, StyledTitle } from "./style";

const PageHeader = ({ data }) => (
    <StyledSection className="page-title-area">
        <div className="container">
            <BreadCrumb01 pageName="About Us" sx={{ pb: "16px" }} />
            <StyledContent className="page-content">
                {data?.headings?.[0] && (
                    <StyledTitle as={data.headings[0]?.level}>
                        {data.headings[0].content}
                    </StyledTitle>
                )}
                {data?.texts?.[0] && <p>{data.texts[0]?.content}</p>}
            </StyledContent>
            {data?.images?.[0]?.src && (
                <Image
                    className="w-100"
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Boseo-HasTech"}
                />
            )}
        </div>
    </StyledSection>
);

PageHeader.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default PageHeader;
