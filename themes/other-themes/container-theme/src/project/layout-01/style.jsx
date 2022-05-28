import styled, { themeGet, css, device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 56px;
    padding-bottom: 26px;
    ${device.medium} {
        padding-top: 76px;
        padding-bottom: 46px;
    }
    ${device.large} {
        padding-top: 96px;
        padding-bottom: 46px;
    }
    ${device.xlarge} {
        padding-top: 116px;
        padding-bottom: 66px;
    }
`;

export const StyledFilterMenu = styled.div`
    margin-bottom: 5px;
    text-align: center;
    ${device.large} {
        text-align: right;
    }
`;

const btnStyle = ({ theme }) => css`
    color: ${theme.colors.primary};
    &:before {
        left: 0;
        width: 100%;
    }
`;

export const StyledFilterBtn = styled.button`
    background-color: transparent;
    border: none;
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
    font-size: 12px;
    font-weight: ${themeGet("fontWeights.heading")};
    letter-spacing: 0.25px;
    margin-right: 15px;
    padding: 1px 0;
    position: relative;
    text-transform: uppercase;
    ${device.medium} {
        font-size: 14px;
        margin-right: 30px;
    }
    ${device.large} {
        margin-right: 60px;
    }
    &:last-of-type {
        margin-right: 0;
    }
    &:before {
        background-color: ${themeGet("colors.primary")};
        bottom: 3px;
        content: "";
        height: 1px;
        position: absolute;
        right: 0;
        width: 0;
        transition: ${themeGet("transition")};
    }
    &:hover {
        ${btnStyle}
    }
    ${({ isActive }) => isActive && btnStyle}
`;
