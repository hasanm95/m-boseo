import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    align-items: center;
    display: flex;
    text-align: center;
    padding: 100px 0;
    ${device.medium} {
        padding: 0;
        height: calc(100vh - 110px);
    }
`;

export const StyledTitle = styled.h1`
    margin-bottom: 34px;
    letter-spacing: -1.25px;
    line-height: 1.25;
    margin-top: 30px;
    ${device.medium} {
        margin-top: 60px;
    }
`;

export const StyledDesc = styled.p`
    a {
        color: ${themeGet("colors.primary")};
    }
`;
