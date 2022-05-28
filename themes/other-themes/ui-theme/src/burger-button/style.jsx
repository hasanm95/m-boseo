import styled, { themeGet } from "@boseo/shared/styled";

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    height: 14px;
    margin-top: 0;
    position: relative;
    top: -1px;
    width: 22px;
    span {
        background-color: ${themeGet("colors.black")};
        border-radius: 2px;
        left: 0;
        display: block;
        position: absolute;
        transition: ${themeGet("transition")};
        height: 2px;
        width: 100%;
        &:first-of-type {
            top: 0;
        }
        &:nth-of-type(2) {
            top: 50%;
            transform: translateY(-50%);
        }
        &:last-of-type {
            bottom: 0;
        }
    }
    &:hover {
        span {
            &:first-of-type,
            &:last-of-type {
                width: 80%;
            }
        }
    }
`;
