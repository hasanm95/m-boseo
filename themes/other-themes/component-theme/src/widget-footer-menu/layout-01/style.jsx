import styled, { themeGet } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledMenu = styled.ul`
    padding-top: 3px;
    text-align: center;
`;

export const StyledItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 0 10px;
    line-height: 1;
    &:not(:last-of-type) {
        &:after {
            background-color: ${themeGet("colors.text")};
            content: "";
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
        }
    }
    &:first-of-type {
        padding-left: 0;
    }
    &:last-of-type {
        padding-right: 0;
    }
`;

export const StyledLink = styled(Anchor)`
    color: ${themeGet("colors.text")};
    position: relative;
    display: block;
    &:hover {
        color: ${themeGet("colors.primary")};
    }
`;
