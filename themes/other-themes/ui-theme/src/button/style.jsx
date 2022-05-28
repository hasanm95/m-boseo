import styled, { css, device, tinycolor } from "@boseo/shared/styled";
import { Link } from "gatsby";

export const createStyles = (
    theme,
    variant,
    color,
    size,
    shape,
    fullwidth,
    hasIcon,
    iconPosition,
    iconDistance,
    iconSize
) => css`
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: normal;
    box-sizing: border-box;
    transition: ${theme.transition};
    text-transform: uppercase;
    font-weight: 600;
    font-family: ${theme.fonts.heading};
    letter-spacing: 0.115px;

    ${(variant === "contained" || variant === "outlined") &&
    css`
        ${size === "sm" &&
        css`
            font-size: 13px;
            line-height: 1.1;
            padding: 12px 18px;
        `}
        ${size === "md" &&
        css`
            font-size: 13px;
            line-height: 1.1;
            padding: 12px 18px;
            ${device.medium} {
                padding: 12px 25px;
                line-height: 1.45;
            }
            ${device.large} {
                padding: 13px 28px;
            }
            ${device.xlarge} {
                padding: 14px 33px;
                font-size: 14px;
            }
        `}
    `}

    ${(variant === "texted" || variant === "underlined") &&
    css`
        ${size === "sm" &&
        css`
            font-size: 13px;
        `}
        ${size === "md" &&
        css`
            font-size: 13px;
            ${device.large} {
                font-size: 14px;
            }
        `}
    `}

    ${variant === "contained" &&
    css`
        border-width: 1px;
        border-style: solid;
        ${color === "primary" &&
        css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            border-color: ${theme.colors.primary};
            &:hover,
            &:focus {
                background-color: ${theme.colors.black};
                border-color: ${theme.colors.black};
                color: ${theme.colors.white};
            }
        `}

        ${color === "light" &&
        css`
            background-color: ${theme.colors.sand};
            color: ${theme.colors.shark};
            border-color: ${theme.colors.sand};
            &:hover,
            &:focus {
                background-color: ${theme.colors.primary};
                color: ${theme.colors.white};
                border-color: ${theme.colors.primary};
            }
        `}
    `}

    ${variant === "texted" &&
    css`
        padding: 0;
        line-height: 1;
        border-width: 0;
        background: transparent;
        border: none;
        ${device.medium} {
            padding: 0;
            line-height: 1;
        }
        ${color === "white" &&
        css`
            color: ${theme.colors.white};
        `}
        ${color === "primary" &&
        css`
            color: ${theme.colors.primary};
            &:hover {
                color: ${theme.colors.heading};
            }
        `}
    `}
    ${variant === "outlined" &&
    css`
        background: transparent;
        border-width: 1px;
        border-style: solid;
        ${color === "primary" &&
        css`
            color: ${theme.colors.primary};
            border-color: ${theme.colors.primary};
            &:hover,
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.primary};
                background-color: ${theme.colors.primary};
            }
        `}

        ${color === "secondary" &&
        css`
            color: ${theme.colors.secondary};
            border-color: ${theme.colors.secondary};
            &:hover {
                color: ${theme.colors.white};
                border-color: ${theme.colors.secondary};
                background-color: ${theme.colors.secondary};
            }
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.secondary};
                background-color: ${theme.colors.secondary};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.secondary)
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}
    ${color === "success" &&
        css`
            color: ${theme.colors.success};
            border-color: ${theme.colors.success};
            &:hover {
                color: ${theme.colors.white};
                border-color: ${theme.colors.success};
                background-color: ${theme.colors.success};
            }
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.success};
                background-color: ${theme.colors.success};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.success)
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}
    ${color === "danger" &&
        css`
            color: ${theme.colors.danger};
            border-color: ${theme.colors.danger};
            &:hover {
                color: ${theme.colors.white};
                border-color: ${theme.colors.danger};
                background-color: ${theme.colors.danger};
            }
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.danger};
                background-color: ${theme.colors.danger};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.danger)
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}
    ${color === "warning" &&
        css`
            color: ${theme.colors.warning};
            border-color: ${theme.colors.warning};
            &:hover {
                color: ${theme.colors.white};
                border-color: ${theme.colors.warning};
                background-color: ${theme.colors.warning};
            }
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.warning};
                background-color: ${theme.colors.warning};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.warning)
                        .setAlpha(0.5)
                        .toRgbString()};
            }
        `}
    ${color === "info" &&
        css`
            color: ${theme.colors.info};
            border-color: ${theme.colors.info};
            &:hover {
                color: ${theme.colors.white};
                border-color: ${theme.colors.info};
                background-color: ${theme.colors.info};
            }
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.info};
                background-color: ${theme.colors.info};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.info).setAlpha(0.5).toRgbString()};
            }
        `}
    ${color === "light" &&
        css`
            color: ${theme.colors.gray600};
            border-color: ${theme.colors.gray400};
            &:hover {
                color: ${theme.colors.gray900};
                border-color: ${theme.colors.light};
                background-color: ${theme.colors.light};
            }
            &:active,
            &:focus {
                color: ${theme.colors.gray900};
                border-color: ${theme.colors.light};
                background-color: ${theme.colors.light};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.light).setAlpha(0.5).toRgbString()};
            }
        `}
    ${color === "dark" &&
        css`
            color: ${theme.colors.dark};
            border-color: ${theme.colors.dark};
            &:hover {
                color: ${theme.colors.white};
                border-color: ${theme.colors.dark};
                background-color: ${theme.colors.dark};
            }
            &:active,
            &:focus {
                color: ${theme.colors.white};
                border-color: ${theme.colors.dark};
                background-color: ${theme.colors.dark};
                box-shadow: 0 0 0 0.2rem
                    ${tinycolor(theme.colors.dark).setAlpha(0.5).toRgbString()};
            }
        `}
    `}

    ${variant === "underlined" &&
    css`
        padding: 0;
        line-height: 1.4;
        border-width: 0;
        background: transparent;
        border: none;
        position: relative;
        ${device.medium} {
            padding: 0;
            line-height: 1.4;
        }
        &:before,
        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            height: 1px;
            transition: ${theme.transition};
        }
        &:before {
            right: 0;
            width: 0;
            z-index: 1;
        }
        &:after {
            left: 0;
            width: 100%;
            background-color: currentColor;
        }
        ${color === "primary" &&
        css`
            color: ${theme.colors.primary};
            &:before {
                background-color: ${theme.colors.heading};
            }
        `}
        ${color === "dark" &&
        css`
            color: ${theme.colors.heading};
            &:before {
                background-color: ${theme.colors.heading};
            }
            &:hover {
                color: ${theme.colors.primary};
                &:before {
                    background-color: ${theme.colors.primary};
                }
            }
        `}

        &:hover {
            &:before {
                left: 0;
                width: 100%;
            }
        }
    `}



    ${shape === "rounded" &&
    css`
        border-radius: ${theme.radii.md};
    `}
    ${shape === "square" &&
    css`
        border-radius: 0;
    `}

    ${shape === "ellipse" &&
    css`
        border-radius: 35px;
    `}

    ${fullwidth &&
    css`
        display: flex;
        width: 100%;
        ${size === "md" &&
        css`
            padding: 14px 33px;
            font-size: 14px;
            line-height: 1.45;
        `}
    `}
    ${hasIcon &&
    css`
        ${iconPosition === "left" &&
        css`
            i,
            svg,
            img {
                padding-right: ${iconDistance};
            }
        `}
        ${iconSize === "xs" &&
        css`
            i {
                font-size: 13px;
            }
        `}
        ${iconSize === "sm" &&
        css`
            i {
                font-size: 16px;
            }
        `}
        ${iconSize === "md" &&
        css`
            i {
                font-size: 18px;
                ${device.md} {
                    font-size: 20px;
                }
            }
        `}
        ${iconSize === "lg" &&
        css`
            i {
                font-size: 20px;
                ${device.md} {
                    font-size: 25px;
                }
            }
        `}
    `}
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const StyledButton = styled.button``;

export const StyledLink = styled(Link)``;

export const StyledAnchor = styled.a``;
