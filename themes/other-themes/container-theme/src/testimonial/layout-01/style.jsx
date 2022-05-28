import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding: 56px 0 60px;
    position: relative;
    ${device.medium} {
        padding: 76px 0 80px;
    }
    ${device.large} {
        padding: 96px 0 100px;
    }
    ${device.xlarge} {
        padding: 116px 0 120px;
    }
    .container {
        position: relative;
        z-index: 2;
    }
    .bg {
        position: absolute !important;
        inset: 0;
        z-index: 1;
    }
`;
