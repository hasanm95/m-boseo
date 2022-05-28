/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledLink, createStyles } from "./style";

const SocialLink = ({
    children,
    className,
    sx,
    href,
    label,
    color,
    bg,
    variant,
    dir,
    size,
    shape,
    space,
    hover,
}) => {
    const socialProps = {
        css: (theme) =>
            createStyles(
                theme,
                dir,
                color,
                bg,
                variant,
                size,
                shape,
                space,
                hover
            ),
    };
    return (
        <StyledLink
            className={cn("social-link", className)}
            sx={sx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            {...socialProps}
        >
            {children}
        </StyledLink>
    );
};

SocialLink.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
    color: PropTypes.oneOf([
        "white",
        "facebook",
        "twitter",
        "dribbble",
        "pinterest",
        "instagram",
        "primary",
    ]),
    variant: PropTypes.oneOf(["contained", "outlined", "texted"]),
    dir: PropTypes.oneOf(["horizontal", "vertical"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    shape: PropTypes.oneOf(["square", "round", "circle"]),
    bg: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "dribbble",
        "linkedin",
        "pinterest",
    ]),
    space: PropTypes.number,
    hover: PropTypes.bool,
};

SocialLink.displayName = "SocialLink";

export default SocialLink;
