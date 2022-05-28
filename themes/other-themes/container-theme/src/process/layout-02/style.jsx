import styled, { device, themeGet } from "@boseo/shared/styled";

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
    .bg {
        position: absolute !important;
        inset: 0;
        z-index: 1;
    }
    .container {
        position: relative;
        z-index: 2;
    }
`;

export const StyledContent = styled.div`
    box-shadow: ${themeGet("shadows.default")};
    display: flex;
    flex-wrap: wrap;
    & > div {
        max-width: 100%;
        ${device.small} {
            max-width: 50%;
        }
        ${device.large} {
            max-width: 25%;
        }
        &:last-of-type {
            border: none;
        }
    }
`;
