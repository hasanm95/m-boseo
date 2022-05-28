import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;
    z-index: 1;
    isolation: isolate;
    ${device.large} {
        padding-top: 40px;
        padding-bottom: 90px;
    }
`;

export const StyledShpae = styled.div`
    display: none;
    ${device.medium} {
        display: block;
        left: -17px;
        position: absolute;
        top: -129px;
        z-index: -1;
    }
`;
