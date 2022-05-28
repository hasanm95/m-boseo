/** @jsx jsx */
import { jsx } from "theme-ui";
import { Children } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledSocial } from "./style";
import SocialLink from "./social-link";

const Social = ({
    children,
    className,
    sx,
    color,
    variant,
    dir,
    size,
    shape,
    space,
    hover,
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el;
        if (child !== null) {
            const childType = child.type;
            const name = childType.displayName || childType.name;
            if (name === "SocialLink") {
                return (
                    <child.type
                        {...child.props}
                        color={color}
                        variant={variant}
                        dir={dir}
                        size={size}
                        shape={shape}
                        space={space}
                        hover={hover}
                    />
                );
            }
        }
        return null;
    });
    return (
        <StyledSocial className={cn("social", className)} sx={sx}>
            {RenderChild}
        </StyledSocial>
    );
};

Social.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    color: PropTypes.oneOf([
        "white",
        "facebook",
        "twitter",
        "dribble",
        "pinterest",
        "primary",
    ]),
    variant: PropTypes.oneOf(["contained", "outlined", "texted"]),
    dir: PropTypes.oneOf(["horizontal", "vertical"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    shape: PropTypes.oneOf(["square", "round", "circle"]),
    space: PropTypes.number,
    hover: PropTypes.bool,
};

Social.defaultProps = {
    dir: "horizontal",
    size: "md",
    shape: "square",
    variant: "texted",
    hover: true,
};

export { SocialLink };
export default Social;
