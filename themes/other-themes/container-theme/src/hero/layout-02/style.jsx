import styled, { device, themeGet } from "@boseo/shared/styled";
import { animationFour } from "@boseo/shared/animations";

export const StyledSection = styled.section`
    align-items: center;
    background-color: ${themeGet("colors.porcelain")};
    display: flex;
    min-height: 550px;
    overflow: hidden;
    position: relative;
    ${device.small} {
        min-height: 600px;
    }
    ${device.medium} {
        height: 100vh;
        min-height: 670px;
    }
`;

export const StyledContent = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 40px;
    ${device.medium} {
        margin-top: 0px;
    }
`;

export const StyledHeading = styled.h1`
    letter-spacing: -2.25px;
    margin-bottom: 22px;
    font-size: 36px;
    ${device.small} {
        font-size: 40px;
    }
    ${device.medium} {
        font-size: 54px;
    }
    ${device.xlarge} {
        font-size: 70px;
    }
`;

export const StyledText = styled.p`
    color: ${themeGet("colors.tundoar")};
    line-height: 1.4;
    font-family: ${themeGet("fonts.heading")};
    letter-spacing: 0;
    br {
        display: none;
    }
    ${device.small} {
        font-size: 24px;
    }
    ${device.xlarge} {
        br {
            display: block;
        }
    }
`;

export const StyledSubheading = styled.h2`
    color: ${themeGet("colors.primary")};
    font-size: ${themeGet("fontSizes.body")};
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 35px;
    text-transform: uppercase;
    ${device.medium} {
        margin-top: 66px;
        margin-bottom: 42px;
    }
`;

export const StyledImageWrap = styled.div`
    display: none;
    ${device.large} {
        display: block;
    }
    .img-man {
        bottom: -30px;
        max-width: none;
        position: absolute !important;
        right: -240px;
        z-index: 1;
    }

    .img-round {
        position: absolute !important;
        max-width: none;
        bottom: -110px;
        right: -220px;
        animation: ${animationFour} linear infinite 12s;
        transition: 0.12s;
    }
`;
