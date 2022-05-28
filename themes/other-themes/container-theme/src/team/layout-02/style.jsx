import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 56px;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 76px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 96px;
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-top: 116px;
        padding-bottom: 120px;
    }
`;
