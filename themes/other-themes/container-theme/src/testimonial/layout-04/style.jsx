import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    margin-top: 54px;
    margin-bottom: 50px;
    ${device.medium} {
        margin-top: 136px;
        margin-bottom: 70px;
    }
    ${device.large} {
        margin-top: 199px;
        margin-bottom: 90px;
    }
    ${device.xlarge} {
        margin-top: 71px;
        margin-bottom: 110px;
    }
`;

export const StyledIcon = styled.div`
    margin-top: 73px;
    margin-bottom: 3px;
    position: relative;
    width: 80px;
    height: 80px;
    isolation: isolate;
    ${device.medium} {
        margin-top: 99px;
        margin-bottom: 22px;
    }
    ${device.large} {
        margin-top: 100px;
        margin-bottom: 0;
    }
    i {
        color: ${themeGet("colors.primary")};
        font-size: 60px;
    }
    &:before {
        position: absolute;
        content: "";
        right: -40%;
        top: -50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${themeGet("colors.primary")};
        opacity: 0.5;
        z-index: -1;
    }
`;
