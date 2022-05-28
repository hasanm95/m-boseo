import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 60px;
    ${device.medium} {
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-bottom: 120px;
    }
`;
