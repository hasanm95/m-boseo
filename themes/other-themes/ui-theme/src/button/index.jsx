/** @jsx jsx */
import { jsx } from "theme-ui";
import cn from "clsx";
import { ButtonComponentType } from "@boseo/helper/types";
import { StyledButton, StyledAnchor, StyledLink, createStyles } from "./style";

const Button = ({
    children,
    type,
    label,
    onClick,
    className,
    path,
    variant,
    color,
    size,
    shape,
    fullwidth,
    iconClass,
    iconPosition,
    iconDistance,
    iconSize,
    disabled,
    sx,
}) => {
    const hasIcon = !!iconClass;

    const btn = {
        size: size || "md",
        color: color || "primary",
        shape: shape || "rounded",
        variant: variant || "contained",
        fullwidth: fullwidth || false,
        iconPosition: iconPosition || "left",
        iconDistance: iconDistance || "10px",
        iconSize: iconSize || "md",
    };
    const buttonProps = {
        css: (theme) =>
            createStyles(
                theme,
                btn.variant,
                btn.color,
                btn.size,
                btn.shape,
                btn.fullwidth,
                hasIcon,
                btn.iconPosition,
                btn.iconDistance,
                btn.iconSize
            ),
    };

    const classes = cn(className, "btn", `btn-${btn.variant}`);

    if (path) {
        const internal = /^\/(?!\/)/.test(path);
        const isHash = path?.startsWith("#");

        if (internal) {
            return (
                <StyledLink
                    aria-label={label}
                    className={classes}
                    to={path}
                    sx={sx}
                    {...buttonProps}
                >
                    {iconClass && btn.iconPosition === "left" && (
                        <i className={iconClass} />
                    )}
                    {children}
                    {iconClass && btn.iconPosition === "right" && (
                        <i className={iconClass} />
                    )}
                </StyledLink>
            );
        }
        if (isHash) {
            return (
                <StyledAnchor
                    aria-label={label}
                    onClick={onClick}
                    className={classes}
                    href={path}
                    sx={sx}
                    {...buttonProps}
                >
                    {iconClass && btn.iconPosition === "left" && (
                        <i className={iconClass} />
                    )}
                    {children}
                    {iconClass && btn.iconPosition === "right" && (
                        <i className={iconClass} />
                    )}
                </StyledAnchor>
            );
        }
        return (
            <StyledAnchor
                aria-label={label}
                className={classes}
                href={path}
                sx={sx}
                {...buttonProps}
            >
                {iconClass && btn.iconPosition === "left" && (
                    <i className={iconClass} />
                )}
                {children}
                {iconClass && btn.iconPosition === "right" && (
                    <i className={iconClass} />
                )}
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            aria-label={label}
            onClick={onClick}
            className={classes}
            type={type}
            disabled={disabled}
            sx={sx}
            {...buttonProps}
        >
            {iconClass && btn.iconPosition === "left" && (
                <i className={iconClass} />
            )}
            {children}
            {iconClass && btn.iconPosition === "right" && (
                <i className={iconClass} />
            )}
        </StyledButton>
    );
};

Button.propTypes = ButtonComponentType;

Button.defaultProps = {
    type: "button",
    // active: false,
    // disabled: false,
};

export default Button;
