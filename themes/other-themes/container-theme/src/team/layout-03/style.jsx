import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 80px;
    padding-bottom: 50px;
    ${device.medium} {
        padding-top: 100px;
        padding-bottom: 60px;
    }
    ${device.large} {
        padding-top: 120px;
        padding-bottom: 80px;
    }
    ${device.xlarge} {
        padding-top: 170px;
        padding-bottom: 130px;
    }
`;
