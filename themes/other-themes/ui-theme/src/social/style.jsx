import styled, { css } from "@boseo/shared/styled";

export const StyledSocial = styled.div``;

export const createStyles = (
    theme,
    dir,
    color,
    bg,
    variant,
    size,
    shape,
    space,
    hover
) => css`
    ${dir === "horizontal" &&
    css`
        display: inline-flex;
        ${space &&
        css`
            margin-right: ${space}px;
            &:last-of-type {
                margin-right: 0;
            }
        `}
    `}
    ${dir === "vertical" &&
    css`
        display: block;
        ${space &&
        css`
            margin-bottom: ${space}px;
            &:last-of-type {
                margin-bottom: 0;
            }
        `}
    `}

    ${variant === "texted" &&
    css`
        padding: 0;
        width: auto;
        height: auto;
        background-color: transparent;
        ${!color &&
        css`
            color: ${theme.colors.chalice};
        `}
        ${color === "white" &&
        css`
            color: ${theme.colors.white};
        `}
        ${size === "md" &&
        css`
            font-size: 14px;
        `}
        ${size === "lg" &&
        css`
            font-size: 18px;
        `}
        ${color === "facebook" &&
        css`
            color: ${theme.colors.facebook};
        `}
        ${color === "twitter" &&
        css`
            color: ${theme.colors.twitter};
        `}
        ${color === "instagram" &&
        css`
            color: ${theme.colors.instagram};
        `}
        ${color === "dribbble" &&
        css`
            color: ${theme.colors.dribbble};
        `}
        ${color === "pinterest" &&
        css`
            color: ${theme.colors.pinterest};
        `}
    `}
    ${variant === "contained" &&
    css`
        justify-content: center;
        align-items: center;
        color: ${theme.colors.white};
        border-width: 1px;
        border-style: solid;
        ${bg === "facebook" &&
        css`
            background-color: ${theme.colors.facebook};
            border-color: ${theme.colors.facebook};
        `}
        ${bg === "twitter" &&
        css`
            background-color: ${theme.colors.twitter};
            border-color: ${theme.colors.twitter};
        `}
        ${bg === "instagram" &&
        css`
            background-color: ${theme.colors.instagram};
            border-color: ${theme.colors.instagram};
        `}
        ${bg === "dribbble" &&
        css`
            background-color: ${theme.colors.dribbble};
            border-color: ${theme.colors.dribbble};
        `}
        ${bg === "linkedin" &&
        css`
            background-color: ${theme.colors.linkedin};
            border-color: ${theme.colors.linkedin};
        `}
        ${bg === "pinterest" &&
        css`
            background-color: ${theme.colors.pinterest};
            border-color: ${theme.colors.pinterest};
        `}
        ${!!bg &&
        css`
            &:hover {
                color: ${theme.colors.white};
            }
        `}
        ${size === "md" &&
        css`
            width: 36px;
            height: 36px;
            font-size: 16px;
        `}
        ${color === "primary" &&
        css`
            background-color: ${theme.colors.primary};
            border-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            &:hover {
                background-color: transparent;
                color: ${theme.colors.primary};
            }
        `}
    `}

    ${shape === "square" &&
    css`
        border-radius: 0px;
    `}


    ${shape === "circle" &&
    css`
        border-radius: 50%;
    `}
    ${hover &&
    css`
        &:hover {
            color: ${theme.colors.primary};
        }
    `}
`;

export const StyledLink = styled.a`
    cursor: pointer;
`;
