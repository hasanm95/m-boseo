import styled, { themeGet, css, device } from "@boseo/shared/styled";

export const StyledWrap = styled.div``;

const colorStyle = (props) => css`
    ${props.color === "white" &&
    css`
        color: ${props.theme.colors.white};
    `}
`;

export const StyledSubtitle = styled.span`
    color: ${themeGet("colors.primary")};
    font-size: ${themeGet("fontSizes.body")};
    font-weight: 400;
    text-transform: uppercase;
    display: block;
    ${colorStyle};
    ${({ hasTitle }) =>
        !hasTitle &&
        css`
            margin-bottom: 0;
        `}
    ${({ hasTitle }) =>
        hasTitle &&
        css`
            margin-bottom: 5px;
            ${device.medium} {
                margin-bottom: 12px;
            }
            ${device.large} {
                margin-bottom: 16px;
            }
        `}
`;

export const StyeldTitle = styled.h2`
    letter-spacing: -1.25px;
    line-height: 1.25;
    ${colorStyle};
    ${({ hasDesc }) =>
        !hasDesc &&
        css`
            margin-bottom: 0;
        `}
    ${({ hasDesc }) =>
        hasDesc &&
        css`
            margin-bottom: 17px;
            ${device.medium} {
                margin-bottom: 20px;
            }
            ${device.large} {
                margin-bottom: 32px;
            }
        `}
    ${({ titleStyle }) =>
        titleStyle === 2 &&
        css`
            font-size: 28px;
            font-weight: 700;
            ${device.medium} {
                font-size: 32px;
            }
            ${device.xlarge} {
                font-size: 36px;
            }
        `}
    span {
        font-weight: 400;
    }
`;

export const StyledDesc = styled.p`
    ${colorStyle};
`;
