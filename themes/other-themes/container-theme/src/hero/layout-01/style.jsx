import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    align-items: center;
    background-color: ${themeGet("colors.gray950")};
    display: flex;
    height: 500px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    ${device.small} {
        height: 550px;
    }
    ${device.medium} {
        height: calc(100vh - 110px);
        min-height: 670px;
    }
    .vector-agency {
        position: absolute;
        bottom: 0;
        z-index: -1;
        display: none;
        ${device.medium} {
            display: block;
        }
    }
`;

export const StyledContent = styled.div`
    margin-top: 75px;
    text-align: center;
    ${device.small} {
        margin-top: 140px;
    }
    ${device.medium} {
        margin-top: 105px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 46px;
    letter-spacing: -2px;
    margin-bottom: 22px;
    ${device.medium} {
        font-size: 70px;
    }
`;

export const StyledDesc = styled.p`
    font-family: ${themeGet("fonts.heading")};
    letter-spacing: 0;
    margin-bottom: 30px;

    br {
        display: none;
    }
    ${device.small} {
        font-size: 20px;
        margin-bottom: 45px;
    }
    ${device.medium} {
        margin-bottom: 66px;
        br {
            display: block;
        }
    }
`;
