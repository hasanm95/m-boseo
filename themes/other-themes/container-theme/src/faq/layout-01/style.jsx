import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 77px;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 92px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 111px;
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-top: 131px;
        padding-bottom: 120px;
    }
`;
