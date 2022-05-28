import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 11px;
    padding-bottom: 25px;
    position: relative;
    z-index: 3;
    ${device.medium} {
        padding-top: 30px;
    }
    ${device.large} {
        padding-top: 50px;
    }
    ${device.xlarge} {
        padding-top: 49px;
        padding-bottom: 71px;
    }
`;
