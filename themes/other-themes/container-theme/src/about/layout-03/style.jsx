import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    position: relative;
    padding-top: 22px;
    padding-bottom: 53px;
    ${device.small} {
        padding-top: 25px;
    }
    ${device.medium} {
        padding-top: 42px;
        padding-bottom: 73px;
    }
    ${device.large} {
        padding-top: 76px;
    }
    ${device.xlarge} {
        padding-top: 109px;
        padding-bottom: 90px;
    }
`;

export const StyledImage = styled.figure`
    margin-bottom: 30px;
    ${device.medium} {
        margin-bottom: 50px;
    }
    ${device.large} {
        position: absolute;
        left: 0;
        bottom: -30px;
        z-index: 1;
        margin: 0;
        transform: translateX(-50%);

        img {
            max-width: 1290px;
        }
    }
    ${device.xlarge} {
        transform: translateX(-40%);
    }
    ${device.xxlarge} {
        transform: translateX(-35%);
    }
    ${device.xxxlarge} {
        transform: translateX(-25%);
    }
`;
