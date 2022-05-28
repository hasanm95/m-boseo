/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Image, Anchor, Button } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import { StyledBox, StyledImg, StyledTitle, StyledDesc } from "./style";

const IconBox = ({ title, desc, path, image, className, sx }) => (
    <StyledBox className={cn(className, "icon-box")} sx={sx}>
        {image?.src && (
            <StyledImg className="icon-box-img">
                <Image src={image.src} alt={image?.alt || title} />
            </StyledImg>
        )}
        <div className="icon-box-content">
            {title && (
                <StyledTitle className="icon-box-title">
                    {path && title && <Anchor path={path}>{title}</Anchor>}
                    {!path && title && <Fragment>{title}</Fragment>}
                </StyledTitle>
            )}
            {desc && <StyledDesc className="icon-box-desc">{desc}</StyledDesc>}
            {path && (
                <Button variant="texted" path={path} className="icon-box-link">
                    Learn More <span className="sr-only">about {title}</span>
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
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default IconBox;
