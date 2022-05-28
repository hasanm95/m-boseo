import styled, { themeGet } from "@boseo/shared/styled";

export const StyledBreadCrumb = styled.div`
    color: ${themeGet("colors.primary")};
    text-transform: capitalize;
    a {
        color: ${themeGet("colors.text")};
    }
`;

export const StyledTitle = styled.h1`
    font-size: clamp(30px, 2.5vw, 44px);
    letter-spacing: -1.25px;
    margin-bottom: 12px;
    text-transform: capitalize;
`;
