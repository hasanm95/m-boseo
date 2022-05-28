import styled, { themeGet } from "@boseo/shared/styled";

export const CloseButtonWrap = styled.button`
    height: 40px;
    width: 40px;
    line-height: 40px;
    padding: 0;
    background: transparent;
    border: none;
    span {
        position: relative;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 100%;
        &:before,
        &:after {
            position: absolute;
            top: 23px;
            left: 8px;
            content: "";
            width: 24px;
            height: 3px;
            background: #000;
            transform-origin: 50% 50%;
            transition: ${themeGet("transition")};
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
    }
    &:hover {
        span {
            color: ${themeGet("colors.primary")};
            &:before,
            &:after {
                transform: none;
            }
        }
    }
`;
