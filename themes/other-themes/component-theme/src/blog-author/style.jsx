import styled, { themeGet } from "@boseo/shared/styled";

export const StyledAuthor = styled.div`
    border: 1px solid ${themeGet("colors.foncrete")};
    border-radius: 10px;
    text-align: center;
    padding: 30px 15px;
`;

export const StyledThumb = styled.figure`
    border: 1px solid ${themeGet("colors.foncrete")};
    display: inline-block;
    border-radius: 50000px;
    padding: 11px;
    margin-bottom: 25px;
    .gatsby-image-wrapper,
    img {
        border-radius: 50000px;
    }
`;

export const StyledName = styled.h4``;

export const StyledRole = styled.h6`
    font-weight: 400;
    text-transform: capitalize;
`;

export const StyledBio = styled.p``;
