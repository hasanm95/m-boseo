import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 56px;
    ${device.medium} {
        padding-top: 76px;
    }
    ${device.large} {
        padding-top: 56px;
    }
    ${device.xlarge} {
        padding: 75px 0 0;
    }
`;
