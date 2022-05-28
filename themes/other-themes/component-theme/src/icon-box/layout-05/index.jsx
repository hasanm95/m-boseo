import React from "react";
import PropTypes from "prop-types";
import { Image, Anchor, Button } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import { StyledBox, StyledImg, StyledTitle, StyledDesc } from "./style";

const IconBox = ({ title, desc, path, image }) => (
    <StyledBox className="icon-box">
        {image?.src && (
            <StyledImg className="icon-box-img">
                <Image src={image.src} alt={image?.alt || title} />
            </StyledImg>
        )}
        <div className="icon-box-content">
            {title && (
                <StyledTitle className="icon-box-title">
                    {path && <Anchor path={path}>{title}</Anchor>}
                    {!path && <>{title}</>}
                </StyledTitle>
            )}
            {desc && <StyledDesc className="icon-box-desc">{desc}</StyledDesc>}
            {path && (
                <Button variant="texted" path={path} className="icon-box-link">
                    Learn More
                </Button>
            )}
        </div>
    </StyledBox>
);

IconBox.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export default IconBox;
