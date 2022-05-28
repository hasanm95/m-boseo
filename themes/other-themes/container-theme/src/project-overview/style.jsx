import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 0;
    ${device.medium} {
        padding-top: 6px;
    }
    ${device.xlarge} {
        padding-top: 37px;
    }
`;

export const StyledThumb = styled.figure`
    margin-bottom: 45px;
    ${device.xlarge} {
        margin-bottom: 80px;
    }
`;

export const StyledHeading = styled.h2`
    color: ${themeGet("colors.heading")};
    font-size: 30px;
    letter-spacing: -1.25px;
    line-height: 1.25;
    margin-bottom: 20px;
    ${device.medium} {
        font-size: 35px;
        margin-bottom: 0;
    }
    ${device.large} {
        font-size: 44px;
    }
`;

export const StyledContent = styled.div`
    ${device.medium} {
        margin-right: 80px;
    }
`;

export const StyledMeta = styled.p`
    span {
        color: ${themeGet("colors.heading")};
    }
`;
