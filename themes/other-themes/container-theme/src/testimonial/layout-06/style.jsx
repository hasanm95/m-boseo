import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 50px;
    padding-top: 40px;
    position: relative;
    ${device.medium} {
        padding-bottom: 60px;
        padding-top: 50px;
    }
    ${device.large} {
        padding-top: 80px;
        padding-bottom: 70px;
    }
`;
