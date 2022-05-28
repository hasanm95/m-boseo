import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    text-align: center;
    background-color: ${themeGet("colors.wild")};
    padding-top: 97px;
    ${device.large} {
        padding-top: 110px;
    }
    ${device.xlarge} {
        padding-top: 120px;
    }
    ${device.xxlarge} {
        padding-top: 126px;
    }
    .section-title {
        z-index: 1;
        position: relative;
    }
`;

export const StyledThumb = styled.div`
    margin-top: -80px;
    ${device.small} {
        margin-top: -100px;
    }
    ${device.medium} {
        margin-top: -150px;
    }
    ${device.large} {
        margin-top: -200px;
    }
    ${device.xlarge} {
        margin-top: -383px;
    }
`;
