import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledBox = styled.div`
    ${device.medium} {
        padding-right: 35px;
    }
`;

export const StyledImg = styled.figure`
    margin-bottom: 20px;
    max-width: 60px;
    ${device.medium} {
        margin-bottom: 30px;
    }
    ${device.xlarge} {
        margin-bottom: 47px;
        max-width: 75px;
    }
    img {
        transition: ${themeGet("transition")};
    }
`;
export const StyledTitle = styled.h3`
    margin-bottom: 15px;
    font-size: 20px;
    ${device.medium} {
        margin-bottom: 18px;
    }
    ${device.xlarge} {
        margin-bottom: 23px;
    }
    a {
        color: ${themeGet("colors.heading")};
    }
`;

export const StyledDesc = styled.p``;
