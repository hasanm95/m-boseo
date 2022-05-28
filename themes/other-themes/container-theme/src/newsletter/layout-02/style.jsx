import styled, { css, device, themeGet } from "@boseo/shared/styled";
import { animationFive } from "@boseo/shared/animations";

export const StyledSection = styled.section`
    background-color: ${themeGet("colors.primary")};
    padding-top: 75px;
    padding-bottom: 80px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    z-index: 1;
    isolation: isolate;
    ${device.medium} {
        padding-top: 90px;
        padding-bottom: 100px;
    }
    ${device.large} {
        padding: 142px 0 160px;
    }
`;

export const StyledNewsletter = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;

export const StyledShape = styled.div`
    position: absolute;
    z-index: -1;
    display: none;
    ${device.large} {
        display: block;
    }
    ${({ layout }) =>
        layout === 1 &&
        css`
            bottom: 0;
            left: 20px;
            ${device.xlarge} {
                left: 200px;
            }
        `}
    ${({ layout }) =>
        layout === 2 &&
        css`
            bottom: 0;
            right: 20px;
            ${device.xlarge} {
                right: 200px;
            }
        `}
    ${({ layout }) =>
        layout === 3 &&
        css`
            left: 23.5%;
            top: 18.5%;
            animation: ${animationFive} linear infinite 4s;
        `}
    ${({ layout }) =>
        layout === 4 &&
        css`
            right: 23.5%;
            top: 20%;
            animation: ${animationFive} linear infinite 4s;
        `}
`;
