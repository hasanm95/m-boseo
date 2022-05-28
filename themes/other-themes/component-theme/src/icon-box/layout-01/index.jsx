/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import { Anchor, Image } from "gatsby-theme-ui";
import { StyledBox, StyledImg, StyledTitle } from "./style";

const IconBox = ({ className, image, title, desc, path, sx }) => (
    <StyledBox className={cn(className, "icon-box")} sx={sx}>
        {image?.src && (
            <StyledImg>
                <Image src={image.src} alt={image.alt || title} />
            </StyledImg>
        )}
        <div className="icon-box-content">
            <StyledTitle>
                {path && title && <Anchor path={path}>{title}</Anchor>}
                {!path && title && <>{title}</>}
            </StyledTitle>
            {desc && <p dangerouslySetInnerHTML={{ __html: desc }} />}
        </div>
    </StyledBox>
);

IconBox.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    path: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default IconBox;
