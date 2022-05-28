import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledFact = styled.div`
    position: relative;
    text-align: center;
`;

export const StyledHeading = styled.h2`
    color: ${themeGet("colors.primary")};
    font-size: 38px;
    margin-bottom: 0;
    ${device.medium} {
        font-size: 46px;
        margin-bottom: 8px;
    }
`;

export const StyledTitle = styled.p`
    font-size: 14px;
    ${device.medium} {
        font-size: 18px;
    }
`;
