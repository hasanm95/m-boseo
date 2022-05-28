/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import { StyledBrandLogo } from "./style";

const BrandLogo = ({ className, image, title, sx }) => (
    <StyledBrandLogo className={cn(className, "brand-logo")} sx={sx}>
        {image?.src && <Image src={image.src} alt={image?.alt || title} />}
    </StyledBrandLogo>
);

BrandLogo.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    sx: PropTypes.shape({}),
};

BrandLogo.defaultProps = {
    title: "Client Logo",
};

export default BrandLogo;
