import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    position: relative;
    padding-top: 41px;
    padding-bottom: 57px;
    ${device.medium} {
        padding-top: 61px;
        padding-bottom: 78px;
    }
    ${device.large} {
        padding-top: 101px;
        padding-bottom: 98px;
    }
    ${device.xlarge} {
        padding-top: 131px;
        padding-bottom: 88px;
    }
    .testimonial-wrapper {
        padding-left: 15px;
        padding-right: 15px;
        ${device.xxlarge} {
            width: calc(50% + 585px);
            margin-left: auto;
            padding: 0;
        }
    }
`;
export const StyledShape = styled.div`
    position: absolute;
    top: -30%;
    z-index: -1;
    max-width: 85%;
    ${device.medium} {
        max-width: 70%;
    }
    ${device.xxlarge} {
        max-width: 100%;
    }
`;
