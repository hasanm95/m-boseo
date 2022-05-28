import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 80px;
    padding-bottom: 60px;
    text-align: center;
    position: relative;
    isolation: isolate;
    ${device.medium} {
        padding-top: 90px;
        padding-bottom: 70px;
    }
    ${device.large} {
        padding-top: 102px;
        padding-bottom: 80px;
    }
`;
