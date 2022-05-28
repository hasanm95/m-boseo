import styled, { css, themeGet } from "@boseo/shared/styled";
import CloseIcon from "../images/icons/light-close.png";

const OffCanvasWrapStyle = ({ isOpen }) => css`
    ${isOpen &&
    css`
        visibility: visible;
        opacity: 1;
    `}
`;

export const OffCanvaseWrap = styled.div`
    position: fixed;
    inset: 0;
    background-color: #333333;
    transition: ${themeGet("transition")};
    z-index: 9999;
    background: rgba(0, 0, 0, 0.7);
    cursor: url(${CloseIcon}) 16 16, pointer;
    overflow-y: hidden;
    visibility: hidden;
    opacity: 0;
    ${OffCanvasWrapStyle}
`;

const OffCanvasInnerStyle = ({ isOpen }) => css`
    ${isOpen &&
    css`
        transform: translateX(0%);
    `}
`;

export const OffCanvasInner = styled.div`
    transform: translateX(120%);
    width: 300px;
    height: 100%;
    float: right;
    cursor: default;
    background-color: #f8f8f8;
    transition: ${themeGet("transition")};
    overflow: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
        background-color: #4054b2;
        outline: 1px solid slategrey;
    }
    ${OffCanvasInnerStyle}
`;
