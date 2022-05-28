import styled, { css, device, themeGet } from "@boseo/shared/styled";

export const createStyles = (theme, hasIcon) => css`
    ${hasIcon &&
    css`
        display: flex;
        align-items: center;
        i,
        svg {
            margin-right: 10px;
            color: ${theme.colors.green};
            font-size: 18px;
        }
    `}
`;

export const StyledListItem = styled.li`
    color: ${themeGet("colors.text")};
    font-size: 16px;
    ${device.large} {
        font-size: 14px;
    }
    ${device.xlarge} {
        font-size: ${themeGet("fontSizes.body")};
    }
    ${({ space }) =>
        space &&
        css`
            margin-bottom: ${space}px;
        `}
    ${({ column }) =>
        column === 2 &&
        css`
            flex: 1 0 100%;
            ${device.medium} {
                max-width: 50%;
                flex-basis: 50%;
            }
        `}
`;
