import styled, { themeGet, device } from "@boseo/shared/styled";
import { Button } from "gatsby-theme-ui";

export const StyledWrap = styled.div`
    position: relative;
    background-color: ${themeGet("colors.primary")};
    border-radius: ${themeGet("radii.md")};
    ${device.medium} {
        background-color: transparent;
        border-radius: 0;
    }
    &:before {
        background-color: ${themeGet("colors.primary")};
        border-radius: ${themeGet("radii.md")};
        content: "";
        height: 100%;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        visibility: hidden;
        width: 100%;
        transition: ${themeGet("transition")};
        z-index: 1;
        display: none;
        ${device.medium} {
            display: block;
        }
    }
    &:hover {
        ${device.medium} {
            &:before {
                opacity: 1;
                visibility: visible;
            }
            .info {
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
                transition-delay: 0.2s;
            }
            .btn {
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
                transition-delay: 0.2s;
            }
        }
    }
`;

export const StyledThumb = styled.figure`
    position: relative;
    img {
        ${device.medium} {
            border-radius: ${themeGet("radii.md")};
        }
    }
`;

export const StyledInfo = styled.div`
    padding: 18px 20px 0;
    ${device.medium} {
        bottom: auto;
        opacity: 0;
        position: absolute;
        top: 0;
        transform: translateY(-50px);
        visibility: hidden;
        transition: ${themeGet("transition")};
        z-index: 2;
    }
    ${device.large} {
        padding: 43px 40px;
    }
`;

export const StyledTitle = styled.h3`
    text-transform: capitalize;
    font-size: 18px;
    margin-bottom: 8px;
    ${device.medium} {
        margin-bottom: 15px;
    }
    ${device.large} {
        font-size: 24px;
    }
    a {
        color: ${themeGet("colors.white")};
    }
`;

export const StyledType = styled.p`
    color: ${themeGet("colors.white")};
    text-transform: capitalize;
    font-size: 14px;
    ${device.large} {
        font-size: ${themeGet("fontSizes.body")};
    }
`;

export const StyledBtn = styled(Button)`
    font-size: 12px;
    padding: 0px 20px 20px;
    ${device.medium} {
        position: absolute;
        transform: translateY(50px);
        visibility: hidden;
        bottom: 0;
        opacity: 0;
        transition: ${themeGet("transition")};
        z-index: 2;
        padding: 10px 20px 20px;
    }
    ${device.large} {
        padding: 10px 40px 42px;
        font-size: 14px;
    }
    i {
        margin-left: 8px;
    }
`;
