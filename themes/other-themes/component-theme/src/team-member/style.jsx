import styled, { css, device, themeGet } from "@boseo/shared/styled";

export const StyledTeamMember = styled.div`
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    box-shadow: ${themeGet("shadows.gray50")};
`;

export const StyledThumb = styled.figure`
    img,
    .gatsby-image-wrapper {
        width: 100%;
    }
`;

export const StyledContent = styled.div`
    padding: 22px 40px 20px;
    ${device.large} {
        padding: 32px 50px 30px;
    }
`;

const titleStyles = ({ theme, inHover }) => css`
    ${inHover &&
    css`
        color: ${theme.colors.white};
    `}
`;

export const StyledTitle = styled.h3`
    font-size: ${themeGet("fontSizes.body")};
    margin-bottom: 7px;
    ${device.medium} {
        font-size: 20px;
    }
    ${titleStyles}
`;

const desiStyles = ({ theme, inHover }) => css`
    ${inHover &&
    css`
        color: ${theme.colors.white};
        margin-bottom: 22px;
        padding-bottom: 6px;
        position: relative;
        ${device.medium} {
            margin-bottom: 25px;
            padding-bottom: 8px;
        }
        ${device.xlarge} {
            margin-bottom: 43px;
        }
        &:before {
            background-color: rgba(255, 255, 255, 0.35);
            bottom: -9px;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 40px;
        }
    `}
`;

export const StyledDesignation = styled.p`
    font-size: 14px;
    ${device.medium} {
        font-size: ${themeGet("fontSizes.body")};
    }
    ${desiStyles}
`;

export const StyledButton = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: ${themeGet("colors.primary")};
    border: none;
    padding: 0;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledHoverContent = styled.div`
    background-color: ${themeGet("colors.primary")};
    border-radius: 5px;
    top: 0;
    padding: 25px 22px;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: ${themeGet("transition")};
    left: -100%;
    opacity: 0;
    visibility: hidden;

    ${(props) =>
        props.show &&
        css`
            left: 0;
            opacity: 1;
            visibility: visible;
        `}
    ${device.medium} {
        padding: 45px 30px;
    }
    ${device.xlarge} {
        padding: 65px 55px 40px 50px;
    }
`;

export const StyledCloseButton = styled.button`
    color: ${themeGet("colors.white")};
    font-size: 18px;
    height: auto;
    position: absolute;
    right: 38px;
    top: 38px;
    line-height: 1;
    border: none;
    background-color: transparent;
    padding: 0;
`;

export const StyledDesc = styled.p`
    color: ${themeGet("colors.white")};
    font-size: 14px;
    ${device.medium} {
        font-size: ${themeGet("fontSizes.body")};
        margin-bottom: 25px;
    }
    ${device.xlarge} {
        margin-bottom: 45px;
    }
`;
