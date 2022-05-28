import React from "react";
import PropTypes from "prop-types";
import { BreadCrumb01 } from "gatsby-theme-component";
import { ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import { StyledSection, StyledThumb } from "./style";

const PageHeader = ({ data }) => (
    <StyledSection className="page-title-area">
        {data?.pageName && <BreadCrumb01 pageName={data.pageName} showTitle />}
        {data?.images?.[0]?.src && (
            <StyledThumb>
                <Image
                    src={data.images[0].src}
                    alt={data.images?.alt || data.pageName}
                />
            </StyledThumb>
        )}
    </StyledSection>
);

PageHeader.propTypes = {
    data: PropTypes.shape({
        pageName: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default PageHeader;
