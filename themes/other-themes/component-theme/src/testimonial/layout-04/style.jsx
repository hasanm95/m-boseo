import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledDesc = styled.p`
    color: ${themeGet("colors.black")};
    font-family: ${themeGet("fonts.heading")};
    font-weight: 500;
    line-height: 30px;
    ${device.medium} {
        font-size: 18px;
        line-height: 34px;
    }
    ${device.large} {
        font-size: 20px;
    }
    ${device.xlarge} {
        font-size: 24px;
        line-height: 40px;
    }
`;

export const StyledInfo = styled.div`
    margin-top: 25px;
    ${device.medium} {
        margin-top: 30px;
    }
    ${device.xlarge} {
        margin-top: 47px;
    }
`;

export const StyledName = styled.h3`
    color: ${themeGet("colors.primary")};
    font-size: 18px;
    margin-bottom: 10px;
`;

export const StyledDesignation = styled.p`
    color: ${themeGet("colors.chalice")};
`;
