import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledWrap = styled.div`
    position: relative;
    background-color: ${themeGet("colors.white")};
    border-radius: 5px;
    box-shadow: ${themeGet("shadows.gray25lg")};
`;

export const StyledThumb = styled.figure`
    position: relative;
    img {
        border-radius: ${themeGet("radii.md")};
        width: 100%;
    }
`;

export const StyledInfo = styled.div`
    padding: 24px 30px 36px;
    ${device.medium} {
        padding: 34px 40px 46px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 15px;
    ${device.large} {
        font-size: 20px;
        margin-bottom: 31px;
    }
    a {
        color: ${themeGet("colors.heading")};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;

export const StyledType = styled.p`
    font-size: 13px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const StyledExcerpt = styled.p``;
