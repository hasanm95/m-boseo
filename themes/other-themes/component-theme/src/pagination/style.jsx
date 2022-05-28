import styled, { css, themeGet } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
`;

export const StyledList = styled.ul`
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`;

export const StyledListItem = styled.li`
    display: inline-block;
    list-style-type: none;
    &:not(:last-of-type) {
        margin-right: 10px;
    }
`;

const linkStyles = ({ active, theme }) => css`
    padding-left: 10px;
    padding-right: 10px;
    display: block;
    text-align: center;
    line-height: 41px;
    min-width: 41px;
    height: 41px;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 5px;
    transition: ${theme.transition};
    ${active &&
    css`
        color: ${theme.colors.primary};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:hover {
            opacity: 0.8;
        }
    `}
    ${!active &&
    css`
        color: ${theme.colors.gray200};
        background-color: ${theme.colors.gray200};
        color: ${theme.colors.heading};
        &:hover {
            color: ${theme.colors.primary};
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `}
`;
export const StyledListLink = styled(Anchor)`
    ${linkStyles};
`;

export const StyledListSpan = styled.span`
    ${linkStyles}
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
        color: ${themeGet("colors.gray200")};
        background-color: ${themeGet("colors.gray200")};
        color: ${themeGet("colors.heading")};
    }
`;
