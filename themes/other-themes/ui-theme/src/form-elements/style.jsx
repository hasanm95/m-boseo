import { css } from "@boseo/shared/styled";

export const InputStyles = ({ theme, layout }) => css`
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: ${theme.lineHeights.body};
    color: ${theme.colors.text2};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: ${theme.radii.md};
    &::placeholder {
        color: ${theme.colors.text2};
        font-size: ${theme.fontSizes.body};
        font-family: ${theme.fonts.body};
    }
    &:-ms-input-placeholder {
        color: ${theme.colors.text2};
        font-size: ${theme.fontSizes.body};
        font-family: ${theme.fonts.body};
    }
    &::-ms-input-placeholder {
        color: ${theme.colors.text2};
        font-size: ${theme.fontSizes.body};
        font-family: ${theme.fonts.body};
    }
    &:disabled,
    &[readonly] {
        background-color: ${theme.colors.whisper};
    }
    ${layout === 1 &&
    css`
        height: 50px;
        padding: 0.375rem 1.75rem;
        font-size: ${theme.fontSizes.body};
        font-family: ${theme.fonts.body};
        background-color: ${theme.colors.white};
        background-clip: padding-box;
        border: 1px solid ${theme.colors.text4};

        &:focus {
            color: ${theme.colors.gray700};
            background-color: ${theme.colors.white};
            border-color: ${theme.colors.border};
            outline: 0;
            box-shadow: ${theme.shadows.input};
        }
    `}
    ${layout === 2 &&
    css`
        background-color: ${theme.colors.alabaster};
        border: 1px solid transparent;
        font-size: 14px;
        height: 46px;
        padding: 7px 20px;
        &:focus {
            border-color: ${theme.colors.primary};
        }
    `}
`;

export const SuccessInputStyles = ({ theme }) => css`
    border-color: ${theme.colors.success};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${theme.colors.success};
        box-shadow: 0 0 0 0.2rem rgb(16 183 89 / 25%);
    }
`;

export const WarningInputStyles = ({ theme }) => css`
    border-color: ${theme.colors.warning};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${theme.colors.warning};
        box-shadow: 0 0 0 0.2rem rgb(255 193 7 / 25%);
    }
`;

export const ErrorInputStyles = ({ theme }) => css`
    border-color: ${theme.colors.danger};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${theme.colors.danger};
        box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
    }
`;
