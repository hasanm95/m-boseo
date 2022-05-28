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
        padding-top: 120px;
        padding-bottom: 120px;
    }
`;

export const StyledWrap = styled.div`
    text-align: center;
    margin-bottom: 50px;
    h3,
    h5,
    h2 {
        font-weight: 500;
    }
`;
