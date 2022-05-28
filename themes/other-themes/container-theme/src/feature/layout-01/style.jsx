import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 56px;
    ${device.medium} {
        padding-top: 76px;
    }
    ${device.large} {
        padding-top: 96px;
    }
    ${device.xlarge} {
        padding-top: 115px;
    }
`;
