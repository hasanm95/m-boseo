import styled, { css } from "@boseo/shared/styled";

export const createStyles = (theme, color) => css`
    ${color === "primary" &&
    css`
        color: ${theme.colors.chalice};
        .meta-item {
            &:before {
                background-color: ${theme.colors.heading};
            }
            a {
                color: ${theme.colors.primary};
            }
        }
    `}
    ${color === "light" &&
    css`
        color: ${theme.colors.coffee};
        .meta-item {
            &:before {
                background-color: ${theme.colors.white};
            }
            a {
                color: ${theme.colors.white};
            }
        }
    `}
`;

export const StyledMeta = styled.div`
    font-size: 14px;
    line-height: 1;
    font-weight: 400;
`;

export const StyleItem = styled.span`
    &:not(:last-of-type) {
        margin-right: 23px;
        position: relative;
        &:before {
            content: "";
            height: 2px;
            position: absolute;
            right: -15px;
            top: 39%;
            width: 3px;
        }
    }
    a {
        margin-left: 4px;
        text-transform: capitalize;
    }
`;
