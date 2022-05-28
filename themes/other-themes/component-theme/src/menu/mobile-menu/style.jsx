import styled, { css, themeGet } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledItem = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    display: block;
    margin-bottom: 15px;
    padding-bottom: 15px;

    &.submenu-open {
        & > .submenu {
            max-height: 1000px;
            visibility: visible;
            opacity: 1;
            padding-block-start: 12px;
            padding-block-end: 10px;
            pointer-events: visible;
        }
    }
    ${({ inSubmenu }) =>
        inSubmenu &&
        css`
            &:last-of-type {
                border: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
        `}
`;

export const StyledLink = styled(Anchor)`
    color: ${themeGet("colors.gallery2")};
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    padding: 9px 0;
    margin: 0;
    text-transform: capitalize;
    position: relative;
    ${({ inSubmenu }) =>
        inSubmenu &&
        css`
            font-size: 15px;
            font-weight: 500;
            padding: 10px 0px;
        `}
`;
export const StyledSubmenu = styled.ul`
    position: relative;
    min-width: 100%;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 14px;
    padding-inline-end: 0;
    background-color: transparent;
    top: auto;
    left: 0;
    box-shadow: ${themeGet("shadows.black")};
    border-bottom: none;
    transform: translateY(0);
    max-height: 0;
    overflow-y: hidden;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transform-origin: top;
    z-index: 99;
`;

export const StyledButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 35px;
    height: 35px;
    background: rgb(10 3 3 / 10%);
    color: ${themeGet("colors.white")};
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: none;
    padding: 0;
    &:hover {
        i {
            color: ${themeGet("colors.white")};
        }
    }
`;
