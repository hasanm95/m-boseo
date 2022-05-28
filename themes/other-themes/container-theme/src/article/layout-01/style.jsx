import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 26px;
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
