import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import { StyledAward, StyledTitle } from "./style";

const AwardItem = ({ title, image, className }) => (
    <StyledAward className={cn("award-item", className)}>
        {image?.src && <Image src={image.src} alt={image?.alt || title} />}
        {title && <StyledTitle>{title}</StyledTitle>}
    </StyledAward>
);

AwardItem.propTypes = {
    image: PropTypes.shape(ImageType).isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default AwardItem;
