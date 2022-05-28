/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import { Anchor, Image } from "gatsby-theme-ui";
import { StyledBox, StyledImg, StyledTitle, StyledBoxNumb } from "./style";

const IconBox = ({ className, image, title, desc, path, number, sx }) => (
    <StyledBox className={cn(className, "icon-box")} sx={sx}>
        {image?.src && (
            <StyledImg>
                <Image
                    className="icon-box-img"
                    src={image.src}
                    alt={image?.alt || title}
                />
            </StyledImg>
        )}
        <div className="icon-box-content">
            <StyledTitle className="icon-box-title">
                {path && <Anchor path={path}>{title}</Anchor>}
                {!path && <Fragment>{title}</Fragment>}
            </StyledTitle>
            {desc && (
                <p
                    className="icon-box-desc"
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
            )}
        </div>
        {number && (
            <StyledBoxNumb className="icon-box-numb">{number}</StyledBoxNumb>
        )}
    </StyledBox>
);

IconBox.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    path: PropTypes.string,
    number: PropTypes.string,
    sx: PropTypes.shape({}),
};
export default IconBox;
