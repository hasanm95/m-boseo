import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 23px;
    ${device.medium} {
        padding-bottom: 43px;
    }
    ${device.large} {
        padding-bottom: 63px;
    }
    ${device.xlarge} {
        padding-bottom: 83px;
    }
`;
