import styled, { css, themeGet } from "@boseo/shared/styled";

export const ScrollTopButton = styled.button`
    background-color: ${themeGet("colors.primary")};
    border-radius: 3px;
    color: ${themeGet("colors.white")};
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    line-height: 54px;
    position: fixed;
    right: 60px;
    bottom: -73px;
    text-align: center;
    width: 50px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: ${themeGet("transition")};
    overflow: hidden;
    ${(props) =>
        props.isStick &&
        css`
            bottom: 73px;
            opacity: 1;
            visibility: visible;
        `}
    &:hover {
        background: ${themeGet("colors.white")};
        box-shadow: 0 0 5px 0 ${themeGet("colors.primary")};
        color: ${themeGet("colors.primary")};
    }
`;
