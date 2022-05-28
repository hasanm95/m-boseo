import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledWrap = styled.div`
    position: relative;
`;

export const StyledThumb = styled.figure`
    position: relative;
    img {
        border-radius: ${themeGet("radii.md")};
        width: 100%;
    }
`;

export const StyledInfo = styled.div`
    padding-top: 20px;
    ${device.large} {
        padding-top: 29px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 7px;
    ${device.large} {
        font-size: 20px;
    }
    a {
        color: ${themeGet("colors.heading")};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;

export const StyledType = styled.p`
    font-size: 14px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 0;
    ${device.large} {
        font-size: ${themeGet("fontSizes.body")};
    }
`;
