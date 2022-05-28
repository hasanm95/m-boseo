import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    background-color: ${themeGet("colors.athens")};
    padding-top: 42px;
    padding-bottom: 28px;
    position: relative;
    z-index: 3;
    ${device.medium} {
        padding-top: 50px;
        padding-bottom: 38px;
    }
    ${device.large} {
        padding-top: 61px;
        padding-bottom: 67px;
    }
`;
