import styled, { themeGet } from "@boseo/shared/styled";

export const StyledContent = styled.div`
    padding: 36px 0 0;
`;
export const StyledTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 0;
    line-height: 1.5;
    a {
        color: ${themeGet("colors.black")};
    }
`;
