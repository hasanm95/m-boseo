import styled, { css, device, themeGet } from "@boseo/shared/styled";
import shape1 from "../../images/shape/d07.png";
import shape2 from "../../images/shape/d08.png";

export const StyledSection = styled.section`
    background-color: ${themeGet("colors.alabaster")};
    padding-top: 60px;
    padding-bottom: 42px;
    ${device.medium} {
        padding-top: 80px;
        padding-bottom: 61px;
    }
    ${device.large} {
        position: relative;
        isolation: isolate;
        margin: 293px 0 90px;
        padding: 16px 0 90px;
        &:before {
            background-image: url(${shape1});
            content: "";
            height: 293px;
            left: 0;
            position: absolute;
            top: -293px;
            width: 100%;
            z-index: -1;
        }
        &:after {
            background-image: url(${shape2});
            bottom: -90px;
            content: "";
            height: 99px;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: -1;
        }
    }
`;

export const StyledBg = styled.div`
    position: absolute;
    width: 100%;
    height: 293px;
    left: 0;
    top: -180px;
    z-index: -1;
`;

export const StyledBgBottom = styled.div`
    bottom: -90px;
    height: 99px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
`;

export const StyledShapeWrap = styled.div`
    position: static;
    display: none;
    ${device.large} {
        display: block;
    }
`;

export const StyledShape = styled.div`
    position: absolute;
    ${({ layout }) =>
        layout === 1 &&
        css`
            bottom: 0;
            left: 0;
            height: 5px;
        `}
    ${({ layout }) =>
        layout === 2 &&
        css`
            right: calc(50% + -80px);
            bottom: 0;
        `}
    ${({ layout }) =>
        layout === 3 &&
        css`
            left: 0;
            bottom: 0;
        `}
    ${({ layout }) =>
        layout === 4 &&
        css`
            right: calc(50% + 13px);
            top: -94px;
        `}
    ${({ layout }) =>
        layout === 5 &&
        css`
            left: 0;
            top: 5px;
        `}
    ${({ layout }) =>
        layout === 6 &&
        css`
            left: 145px;
            top: -126px;
        `}
`;
