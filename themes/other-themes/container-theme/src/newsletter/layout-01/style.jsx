import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 60px;
    margin-bottom: 60px;
    position: relative;
    isolation: isolate;
    ${device.small} {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    ${device.medium} {
        padding-top: 150px;
        padding-bottom: 150px;
        margin-top: 70px;
    }
`;

export const StyledShape = styled.div`
    position: absolute;
    z-index: -1;
    inset: 0;
    text-align: center;
`;
