import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 76px;
    padding-bottom: 80px;
    ${device.medium} {
        padding-top: 96px;
        padding-bottom: 100px;
    }
    ${device.large} {
        padding-top: 116px;
        padding-bottom: 120px;
    }
    ${device.xlarge} {
        padding-top: 146px;
        padding-bottom: 150px;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 30px;
    text-transform: uppercase;
    ${device.medium} {
        margin-bottom: 50px;
    }
`;

export const StyledContactInfo = styled.div`
    margin-top: -8px;
    margin-bottom: 41px;
    ${device.large} {
        margin-bottom: 0;
    }
`;

export const StyledInfoLocation = styled.p`
    color: ${themeGet("colors.text")};
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
    ${device.medium} {
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 32px;
    }
    span {
        color: ${themeGet("colors.heading")};
        font-weight: 600;
    }
`;
export const StyledInfoAddress = styled.p`
    margin-bottom: 9px;
`;
export const StyledInfoMail = styled.a`
    display: block;
    margin-top: 16px;
    position: relative;
    margin-bottom: 15px;
    text-decoration: underline;
    ${device.medium} {
        margin-bottom: 25px;
    }
`;
export const StyledInfoPhone = styled.a`
    display: block;
    color: ${themeGet("colors.primary")};
    font-size: 18px;
    font-weight: 500;
    ${device.medium} {
        font-size: 24px;
    }
`;
