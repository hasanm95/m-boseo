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

export const StyledHeaderTop = styled.div`
    border-bottom: 1px solid ${themeGet("colors.border")};
    padding: 13px 0;
    display: none;

    ${device.medium} {
        display: block;
    }
    ${({ transparent }) =>
        transparent &&
        css`
            background-color: transparent;
        `}
`;

export const StyledHeaderBottom = styled.div`
    position: relative;
    display: block;
`;
const innerStyles = ({ theme, transparent, isSticky }) => css`
    ${!transparent &&
    css`
        padding: 15px 0;
        background-color: ${theme.colors.white};
        ${device.large} {
            padding: 20px 0;
        }
        ${device.xlarge} {
            padding: 30px 0;
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
        padding: 10px 0;
        ${device.xlarge} {
            padding: 15px 0;
        }
    `}
    ${!isSticky &&
    transparent &&
    css`
        padding-top: 38px;
        background-color: transparent;
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

    ${({ center }) =>
        center &&
        css`
            justify-content: center;
        `}

    ${({ right }) =>
        right &&
        css`
            justify-content: flex-end;
        `}
`;

export const StyledNavigation = styled.nav`
    display: none;
    ${device.large} {
        display: block;
    }
`;

export const StyleActionButton = styled(Button)`
    letter-spacing: 0.152px;
    margin-right: 20px;
    @media (max-width: 575px) {
        font-size: 12px;
        padding: 12px 10px;
    }
    ${device.xlarge} {
        padding: 14px 32px;
        margin-right: 0;
    }
    &:hover {
        background-color: ${themeGet("colors.primary")};
        border-color: ${themeGet("colors.primary")};
    }
`;

export const StyledInfo = styled.div`
    align-items: center;
    display: flex;
    font-size: 14px;
    line-height: 1;
    margin-top: 1px;
`;

export const StyledInfoItem = styled.a`
    border-left: 1px solid ${themeGet("colors.border")};
    color: ${themeGet("colors.text")};
    margin-left: 24px;
    padding-left: 25px;
    &:first-of-type {
        border: none;
        margin-left: 0;
        padding-left: 0;
    }
    .icon {
        color: ${themeGet("colors.primary")};
        font-size: ${themeGet("fontSizes.body")};
        margin-right: 10px;
        position: relative;
        top: 1px;
        &.lnr-map-marker {
            margin-left: -3px;
        }
    }
    br {
        display: none;
    }
`;

export const StyledFixedHeader = styled.div`
    height: ${(props) => props.height}px;
`;
