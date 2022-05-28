import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 97px;
    padding-top: 56px;
    position: relative;
    background: ${themeGet("colors.gray950")};
    ${device.medium} {
        padding-top: 76px;
        padding-bottom: 139px;
    }
    ${device.large} {
        padding-top: 96px;
        padding-bottom: 156px;
    }
    ${device.xlarge} {
        padding-top: 116px;
    }
`;
