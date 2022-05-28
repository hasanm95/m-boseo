/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Image } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import { StyledLogo } from "./style";

const Logo = ({ sx, className, mainLogo, lightLogo }) => (
    <StyledLogo to="/" sx={sx} className={className}>
        <span className="sr-only">Go to homepage</span>
        {mainLogo && (
            <Image
                className="logo-main"
                src={mainLogo.src}
                alt={mainLogo?.alt || "Logo"}
            />
        )}
        {lightLogo && (
            <Image
                className="logo-light"
                src={lightLogo.src}
                alt={lightLogo?.alt || "Logo"}
            />
        )}
    </StyledLogo>
);

Logo.propTypes = {
    sx: PropTypes.shape({}),
    className: PropTypes.string,
    mainLogo: PropTypes.shape(ImageType),
    lightLogo: PropTypes.shape(ImageType),
};

export default Logo;
