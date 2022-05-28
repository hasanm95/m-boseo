import styled, { themeGet, css, device } from "@boseo/shared/styled";

export const StyledNav = styled.div`
    background-color: ${themeGet("colors.white")};
    box-shadow: ${themeGet("shadows.lg")};
    border: 1px solid ${themeGet("colors.primary")};
    border-radius: 5px;
    display: inline-block;
    padding: 4px;
    position: relative;
    z-index: 1;
`;

const activeBtnStyles = ({ theme, active }) => css`
    ${active &&
    css`
        color: ${theme.colors.heading}; ;
    `}
`;

export const StyledBtn = styled.button`
    border-radius: 5px;
    color: ${themeGet("colors.white")};
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    text-align: center;
    width: 120px;
    transition: ${themeGet("transition")};
    ${device.medium} {
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        width: 140px;
    }
    ${activeBtnStyles}
`;

export const StyledLabel = styled.span`
    background-color: ${themeGet("colors.primary")};
    width: calc(50% - 6px);
    height: calc(100% - 8px);
    position: absolute;
    border-radius: 5px;
    top: calc(0px + 4px);
    left: calc(0px + 4px);
    margin: 0;
    padding: 0;
    z-index: -1;
    transition: ${themeGet("transition")};
    ${({ active }) =>
        active &&
        css`
            transform: translateX(calc(100% + 4px));
        `}
`;
