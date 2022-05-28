import styled, { css, device } from "@boseo/shared/styled";
import { shapeMoveOne, shapeMoveTwo } from "@boseo/shared/animations";

export const StyledShapeLayer = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
`;

export const createStyles = (theme, layout) => css`
    ${layout === 1 &&
    css`
        background-color: ${theme.colors.tan};
        height: 25px;
        width: 25px;
        top: 110px;
        left: 46px;
        animation: ${shapeMoveTwo} linear infinite 5s;
    `}
    ${layout === 2 &&
    css`
        background-color: ${theme.colors.primary};
        height: 15px;
        width: 15px;
        top: 272px;
        left: -98px;
        animation: ${shapeMoveOne} linear infinite 5s;
    `}
    ${layout === 3 &&
    css`
        background-color: ${theme.colors.bossanova};
        height: 10px;
        width: 10px;
        top: 346px;
        left: 48px;
        animation: ${shapeMoveOne} linear infinite 8s;
    `}
    ${layout === 4 &&
    css`
        background-color: ${theme.colors.bossanova};
        height: 15px;
        width: 15px;
        top: 114px;
        right: 146px;
        animation: ${shapeMoveOne} linear infinite 8s;
    `}
    ${layout === 5 &&
    css`
        border-radius: 50%;
        height: 7px;
        width: 7px;
        top: 188px;
        right: 0;
        animation: ${shapeMoveTwo} linear infinite 5s;
    `}
    ${layout === 6 &&
    css`
        background-color: ${theme.colors.bermuda};
        height: 30px;
        width: 30px;
        top: 336px;
        right: 65px;
        animation: ${shapeMoveOne} linear infinite 5s;
    `}
    ${layout === 7 &&
    css`
        background-color: ${theme.colors.bsun};
        height: 60px;
        width: 60px;
        bottom: 236px;
        left: -50px;
        animation: ${shapeMoveTwo} linear infinite 5s;
        ${device.large} {
            height: 120px;
            width: 120px;
        }
    `}
    ${layout === 8 &&
    css`
        background-color: ${theme.colors.amethyst};
        height: 60px;
        width: 60px;
        bottom: 136px;
        right: -44px;
        animation: ${shapeMoveTwo} linear infinite 5s;
        ${device.large} {
            height: 90px;
            width: 90px;
        }
    `}
`;

export const StyledShape = styled.div`
    border-radius: 50%;
    position: absolute;
`;
