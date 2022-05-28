/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StyledAnchor, StyledLink } from "./style";

const Anchor = ({
    path,
    children,
    className,
    rel,
    label,
    target,
    onClick,
    sx,
}) => {
    const internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        const isHash = path.startsWith("#");
        if (isHash) {
            return (
                <StyledAnchor
                    aria-label={label}
                    rel={rel}
                    className={className}
                    href={path}
                    onClick={onClick}
                    sx={sx}
                >
                    {children}
                </StyledAnchor>
            );
        }
        return (
            <StyledAnchor
                aria-label={label}
                rel={rel}
                className={className}
                href={path}
                target={target}
                onClick={onClick}
            >
                {children}
            </StyledAnchor>
        );
    }

    return (
        <StyledLink
            aria-label={label}
            rel="preload"
            className={className}
            to={path}
            onClick={onClick}
        >
            {children}
        </StyledLink>
    );
};

Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    rel: PropTypes.string,
    label: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    onClick: PropTypes.func,
    sx: PropTypes.objectOf(PropTypes.any),
};

Anchor.displayName = "Anchor";

export default Anchor;
