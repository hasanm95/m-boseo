import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    align-items: center;
    display: flex;
    min-height: 500px;
    position: relative;
    isolation: isolate;
    ${device.small} {
        min-height: 640px;
    }
    ${device.medium} {
        min-height: 700px;
    }
    ${device.large} {
        height: 100vh;
        min-height: 700px;
    }
`;

export const StyledContent = styled.div`
    margin-top: 80px;
    ${device.medium} {
        margin-top: 66px;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 20px;
    letter-spacing: -0.4px;
    br {
        display: none;
    }
    ${device.small} {
        font-size: 36px;
        margin-bottom: 25px;
    }
    ${device.medium} {
        font-size: 44px;
        margin-bottom: 30px;
    }
    ${device.xlarge} {
        font-size: 52px;
        margin-bottom: 30px;
        br {
            display: block;
        }
    }
`;

export const StyledDesc = styled.p`
    font-family: ${themeGet("fonts.body")};
    margin-bottom: 30px;
    ${device.small} {
        margin-bottom: 35px;
    }
    ${device.medium} {
        margin-bottom: 40px;
        font-size: 18px;
    }
    ${device.large} {
        margin-bottom: 45px;
    }
    ${device.xlarge} {
        margin-bottom: 56px;
    }
`;

export const StyledShape = styled.div`
    position: absolute;
    right: -17px;
    top: 0;
    z-index: -1;
`;

export const StyledThumb = styled.div`
    display: none;
    ${device.large} {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-top: 74px;
        max-width: 58%;
        right: -25px;
    }
    ${device.xxxlarge} {
        right: 13%;
        width: auto;
    }
`;

export const StyledBtnWrap = styled.div`
    a {
        &:last-of-type {
            margin-left: 15px;
            ${device.medium} {
                margin-left: 25px;
            }
        }
    }
    .btn-texted {
        font-weight: 400;
    }
`;
