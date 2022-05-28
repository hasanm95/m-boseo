import styled, { themeGet } from "@boseo/shared/styled";

export const StyledBlog = styled.article``;

export const StyledContent = styled.div`
    padding: 26px 0 0;
`;
export const StyledTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 0;
    line-height: 1.5;
    a {
        color: ${themeGet("colors.black")};
        border-bottom: 1px solid transparent;
    }
    &:hover {
        a {
            color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
        }
    }
`;
