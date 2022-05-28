import styled, { themeGet, css, device } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    justify-content: center;
    align-items: center;
`;

const navItemStyle = ({ theme, hasSubmenu }) => css`
    ${hasSubmenu &&
    css`
        padding-right: 10px;
        position: relative;
        & > i {
            position: absolute;
            right: -6px;
            top: 4px;
            font-size: 10px;
            color: ${theme.colors.heading};
        }
        &:hover {
            .submenu-nav {
                transform: none;
                opacity: 1;
                visibility: visible;
                pointer-events: visible;
            }
        }
    `}
`;

export const StyledItem = styled.li`
    font-family: ${themeGet("fonts.heading")};
    margin-right: 25px;
    ${device.xlarge} {
        margin-right: 28px;
    }
    ${device.xxlarge} {
        margin-right: 38px;
    }
    ${navItemStyle};
`;

export const StyledLink = styled(Anchor)`
    color: ${themeGet("colors.heading")};
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    position: relative;
    line-height: ${themeGet("lineHeights.heading")};
    display: block;
    ${device.xlarge} {
        font-size: 14px;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
    }
`;

export const StyledSubmenu = styled.ul`
    background-color: ${themeGet("colors.white")};
    position: absolute;
    top: 100%;
    transform: translateY(50px);
    transition: ${themeGet("transition")};
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 99;
    border-radius: 0 0 5px 5px;
    box-shadow: ${themeGet("shadows.md")};
    left: -35px;
    margin-top: 25px;
    min-width: 270px;
    padding: 25px 0;
    &:before {
        content: "";
        position: absolute;
        height: 36px;
        width: 100%;
        left: 0;
        bottom: 100%;
    }
`;

export const StyledSubItem = styled.li`
    padding: 7px 37px;
`;

export const StyledSubLink = styled(Anchor)`
    letter-spacing: 0;
    line-height: 26px;
    position: relative;
    text-transform: capitalize;
    color: ${themeGet("colors.heading")};
    font-weight: 600;
    &:after {
        background-color: ${themeGet("colors.primary")};
        bottom: 0;
        content: "";
        height: 1px;
        position: absolute;
        right: 0;
        width: 0;
        transition: ${themeGet("transition")};
    }
    &:hover {
        color: ${themeGet("colors.primary")};
        &:after {
            left: 0;
            width: 100%;
        }
    }
`;
