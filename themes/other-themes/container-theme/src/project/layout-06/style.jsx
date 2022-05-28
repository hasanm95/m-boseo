import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 0;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 7px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 16px;
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-top: 36px;
        padding-bottom: 120px;
    }
`;

export const StyledBottom = styled.div`
    text-align: center;
    margin-top: 20px;
`;
