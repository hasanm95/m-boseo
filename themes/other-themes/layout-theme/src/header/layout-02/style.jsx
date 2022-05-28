import styled, { device, css, themeGet } from "@boseo/shared/styled";
import { fadeInDown } from "@boseo/shared/animations";
import { Button } from "gatsby-theme-ui";

export const StyledHeader = styled.header`
    ${({ transparent }) =>
        !transparent &&
        css`
            position: relative;
        `}
    ${({ transparent }) =>
        transparent &&
        css`
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 9;
        `}
`;

const innerStyles = ({ theme, transparent, isSticky }) => css`
    ${!transparent &&
    css`
        padding: 15px 0;
        background-color: ${theme.colors.white};
        ${device.large} {
            padding: 0;
        }
    `}
    ${isSticky &&
    css`
        position: fixed;
        z-index: 999;
        box-shadow: ${theme.shadows.header};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
        background-color: ${theme.colors.white};
    `}
    ${isSticky &&
    transparent &&
    css`
        padding: 17px 0;
        ${device.xlarge} {
            padding: 27px 0 23px;
        }
    `}
    ${!isSticky &&
    transparent &&
    css`
        padding: 35px 0 0;
        background-color: transparent;
        ${device.xlarge} {
            padding: 50px 0 0;
        }
    `}
`;

export const StyledHeaderInner = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 99;

    ${innerStyles}
`;

export const StyledHeaderMain = styled.div`
    display: flex;
    align-items: center;

    ${device.xxlarge} {
        padding: 0 60px;
        max-width: 100%;
    }
`;

export const StyledHeaderCol = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ${({ left }) =>
        left &&
        css`
            justify-content: flex-start;
        `}
    ${({ right }) =>
        right &&
        css`
            justify-content: flex-end;
        `}
`;

export const StyledNavigation = styled.nav`
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;

export const StyledAction = styled.div`
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
`;

const btnStyles = ({ theme, isSticky }) => css`
    ${isSticky &&
    css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    `}
`;

export const StyleActionButton = styled(Button)`
    margin-right: 15px;
    ${device.small} {
        margin-right: 25px;
    }
    ${device.xlarge} {
        margin-right: 0;
    }
    @media screen and (max-width: 575px) {
        padding: 10px;
        font-size: 11px;
    }
    ${btnStyles}
`;

export const StyledInfo = styled.div`
    display: none;
    ${device.medium} {
        display: block;
        margin-right: 25px;
    }
    ${device.xxlarge} {
        margin-right: 50px;
    }
`;

export const StyledInfoItem = styled.a`
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
    font-weight: 400;
    margin-left: 15px;
    padding-left: 15px;
    position: relative;
    &:first-of-type {
        color: ${themeGet("colors.primary")};
        font-weight: 600;
        margin-left: 0;
        padding-left: 0;
    }
    &:last-of-type {
        &:before {
            background-color: ${themeGet("colors.text")};
            content: "";
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 2px;
        }
    }
`;

export const StyledFixedHeader = styled.div`
    height: ${(props) => props.height}px;
`;
