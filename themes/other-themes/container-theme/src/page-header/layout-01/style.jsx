import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 75px;
    text-align: center;
    ${device.medium} {
        padding-top: 85px;
    }
    ${device.large} {
        padding-top: 105px;
    }
    ${device.xlarge} {
        padding-top: 124px;
    }
`;

export const StyledContent = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    ${device.medium} {
        max-width: 90%;
        margin-bottom: 40px;
    }
    ${device.large} {
        max-width: 65%;
        margin-bottom: 60px;
    }
    ${device.xlarge} {
        max-width: 65%;
        margin-bottom: 110px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: clamp(30px, 2.5vw, 44px);
    letter-spacing: -1.25px;
    line-height: 1.25;
    margin-bottom: 20px;
    ${device.large} {
        margin-bottom: 30px;
    }
    ${device.xlarge} {
        margin-bottom: 42px;
    }
`;
