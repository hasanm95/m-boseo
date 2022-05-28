import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledBlog = styled.article`
    border-radius: 5px;
    position: relative;
    &:before {
        position: absolute;
        content: "";
        inset: 0;
        box-shadow: ${themeGet("shadows.gray50")};
    }
`;
export const StyledContent = styled.div`
    padding: 30px 20px;
    position: relative;
    z-index: 1;
    ${device.medium} {
        padding: 35px 30px 45px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 0;
    line-height: 1.5;
    a {
        color: ${themeGet("colors.black")};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;
export const StyledExcerpt = styled.p`
    margin-top: 10px;
    ${device.medium} {
        margin-top: 21px;
    }
`;
