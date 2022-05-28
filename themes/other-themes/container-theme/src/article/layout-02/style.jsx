import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    background-color: ${themeGet("colors.athens")};
    padding-top: 56px;
    padding-bottom: 40px;
    ${device.medium} {
        padding-top: 76px;
    }
    ${device.large} {
        padding-top: 96px;
    }
    ${device.xlarge} {
        padding-top: 116px;
    }
`;
