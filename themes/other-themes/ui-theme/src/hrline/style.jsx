import styled, { themeGet } from "@boseo/shared/styled";

export const StyledHR = styled.hr`
    margin-block-start: 0;
    margin-block-end: 0;
    border: 0;
    border-bottom: 1px solid ${themeGet("colors.border")};
`;
