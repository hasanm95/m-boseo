import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledWrap = styled.div`
    border-top: 4px solid ${themeGet("colors.primary")};
    border-radius: 5px;
    padding: 33px 20px 39px;
    position: relative;
    background: ${themeGet("colors.white")};
    ${device.small} {
        padding: 35px 25px 40px;
    }
    ${device.medium} {
        padding: 43px 45px 49px;
    }
    &:before {
        position: absolute;
        content: "";
        inset: 0;
        box-shadow: ${themeGet("shadows.sm")};
        ${device.medium} {
            box-shadow: ${themeGet("shadows.xl")};
        }
    }
`;

export const StyledDesc = styled.p`
    margin-bottom: 0;
`;

export const StyledThumb = styled.div`
    border-radius: 50%;
    margin-right: 20px;
    max-width: 60px;
    img,
    .gatsby-image-wrapper {
        border-radius: 50%;
    }
`;

export const StyledInfo = styled.div`
    margin-top: 25px;
    align-items: center;
    display: flex;
    position: relative;
    ${device.medium} {
        margin-top: 36px;
    }
`;

export const StyledName = styled.h3`
    color: ${themeGet("colors.heading")};
    font-size: ${themeGet("fontSizes.body")};
    margin-bottom: 10px;
`;

export const StyledDesignation = styled.p`
    color: ${themeGet("colors.chalice")};
    font-size: 14px;
    line-height: 1;
`;

export const StyledQuote = styled.div`
    position: absolute;
    right: 0;
    transform: translateY(-50%);
    top: 50%;
    i {
        color: ${themeGet("colors.primary")};
        line-height: 1;
        font-size: 35px;
    }
`;
