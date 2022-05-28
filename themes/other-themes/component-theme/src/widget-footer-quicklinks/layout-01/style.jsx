import styled, { themeGet } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledMenu = styled.ul`
    padding-top: 3px;
`;

export const StyledItem = styled.li`
    &:not(:last-of-type) {
        margin-bottom: 11px;
    }
`;

export const StyledLink = styled(Anchor)`
    color: ${themeGet("colors.text")};
    display: inline-block;
    position: relative;
    &:after {
        background-color: ${themeGet("colors.primary")};
        bottom: -2px;
        content: "";
        display: inline-block;
        height: 1px;
        overflow: hidden;
        position: absolute;
        right: 0;
        transition: ${themeGet("transition")};
        width: 0;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
        &:after {
            left: 0;
            width: 100%;
        }
    }
`;
