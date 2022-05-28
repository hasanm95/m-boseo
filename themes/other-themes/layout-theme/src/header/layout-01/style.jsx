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
const innerStyles = ({ theme, transparent, isSticky, hasBorder }) => css`
    ${!transparent &&
    css`
        background-color: ${theme.colors.white};
    `}
    ${isSticky &&
    css`
        position: fixed;
        z-index: 999;
        box-shadow: ${theme.shadows.header};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
        border-bottom: none;
    `}
    ${isSticky &&
    transparent &&
    css`
        background-color: ${theme.colors.white};
    `}
    ${hasBorder &&
    css`
        border-bottom: 1px solid ${theme.colors.athens};
    `}
`;

export const StyledHeaderInner = styled.div`
    padding: 15px 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 99;
    ${innerStyles};

    ${device.large} {
        padding: 0;
    }
`;

export const StyledHeaderRight = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-left: 8px;
    ${device.large} {
        justify-content: space-between;
    }
`;

export const StyledNavigation = styled.nav`
    display: none;
    ${device.large} {
        display: block;
    }
`;

export const StyledAction = styled.div`
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
`;

export const StyleActionButton = styled(Button)`
    font-size: 11px;
    padding: 10px 14px;
    ${device.large} {
        display: block;
        margin-left: 22px;
        letter-spacing: 0.152px;
        padding: 47px 24px;
        line-height: 1;
    }
    ${device.xlarge} {
        margin-left: 72px;
        padding: 47px 42px;
    }
    ${({ isSticky }) =>
        isSticky &&
        css`
            ${device.large} {
                padding: 33px 25px;
            }
            ${device.xlarge} {
                padding: 33px 43px;
            }
        `}
`;

export const StyledSearchBtn = styled.button`
    line-height: 1;
    vertical-align: middle;
    margin-left: 0;
    background-color: transparent;
    border: none;
    color: ${themeGet("colors.heading")};
    font-size: 20px;
    ${device.large} {
        padding: 0 7px;
    }
    ${device.xlarge} {
        padding: 0 6px;
    }
    span {
        font-size: 20px;
        &.icon-search-close {
            display: none;
        }
    }
`;

export const StyledSearchWrap = styled.div`
    position: relative;
`;

export const StyledFixedHeader = styled.div`
    height: ${(props) => props.height}px;
`;
