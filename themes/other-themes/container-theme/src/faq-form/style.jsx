import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    background-color: ${themeGet("colors.gray950")};
    border-bottom: 1px solid ${themeGet("colors.border")};
    padding-top: 76px;
    padding-bottom: 80px;
    ${device.medium} {
        padding-top: 92px;
        padding-bottom: 100px;
    }
    ${device.large} {
        padding-top: 111px;
        padding-bottom: 120px;
    }
    ${device.xlarge} {
        padding-top: 131px;
        padding-bottom: 140px;
    }
`;
