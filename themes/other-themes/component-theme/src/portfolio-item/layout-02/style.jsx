import styled, { themeGet, device } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledWrap = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    &:hover {
        ${device.medium} {
            .info {
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
            }
        }
    }
`;

export const StyledThumb = styled.figure`
    position: relative;
    .gatsby-image-wrapper {
        width: 100%;
    }
    img {
        border-radius: ${themeGet("radii.md")};
        width: 100%;
    }
`;

export const StyledInfo = styled.div`
    background-color: ${themeGet("colors.primary")};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    bottom: 0;
    left: 0;
    padding: 15px;
    position: absolute;
    width: 100%;
    transition: ${themeGet("transition")};
    ${device.small} {
        padding: 25px 30px;
    }
    ${device.medium} {
        opacity: 0;
        padding: 38px 40px;
        transform: translateY(100%);
        visibility: hidden;
    }
    ${device.xlarge} {
        padding: 25px 30px;
    }
    ${device.xxlarge} {
        padding: 38px 40px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: capitalize;
    a {
        color: ${themeGet("colors.white")};
    }
    ${device.large} {
        font-size: 24px;
        margin-bottom: 15px;
    }
    ${device.xlarge} {
        font-size: 18px;
    }
    ${device.xxlarge} {
        font-size: 24px;
    }
`;

export const StyledType = styled.p`
    color: ${themeGet("colors.white")};
    font-size: 14px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 0;
    ${device.large} {
        font-size: ${themeGet("fontSizes.body")};
    }
`;

export const StyledReadMore = styled(Anchor)`
    color: ${themeGet("colors.white")};
    font-size: 18px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    ${device.large} {
        right: 40px;
    }
`;
