import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    border-bottom: 1px solid ${themeGet("colors.border")};
    padding-top: 54px;
    padding-bottom: 30px;
    ${device.small} {
        padding-top: 56px;
    }
    ${device.large} {
        padding-top: 76px;
        padding-bottom: 50px;
    }
`;
