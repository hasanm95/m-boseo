import styled, { themeGet } from "@boseo/shared/styled";
import { Link } from "gatsby";

export const StyledCrumb = styled.div`
    line-height: 1.4;
`;
export const StyledItemLink = styled(Link)`
    color: ${themeGet("colors.text")};
    text-transform: capitalize;
`;

export const StyledItemSpan = styled.span`
    color: ${themeGet("colors.text")};
    text-transform: capitalize;
`;

export const StyledTitle = styled.span`
    color: ${themeGet("colors.primary")};
`;
