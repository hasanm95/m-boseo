import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    position: relative;
    isolation: isolate;
    padding-top: 9px;
    padding-bottom: 15px;
    ${device.medium} {
        padding-top: 30px;
    }
    ${device.large} {
        padding-top: 87px;
    }
    ${device.xlarge} {
        padding-top: 72px;
    }
    .project-wrapper {
        padding: 0 15px;
        ${device.small} {
            padding: 0;
        }
    }
`;

export const StyledShpae = styled.div`
    display: none;
    ${device.medium} {
        display: block;
        position: absolute;
        right: 0;
        top: -230px;
        z-index: -1;
        width: 65%;
    }
    ${device.large} {
        width: auto;
    }
`;
