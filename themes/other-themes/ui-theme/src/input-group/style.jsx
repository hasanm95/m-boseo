import styled, { css, device, themeGet } from "@boseo/shared/styled";

export const StyledInputGroup = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background-color: ${themeGet("colors.white")};
    border-radius: 5px;
    box-shadow: ${themeGet("shadows.default")};
    padding: 5px 5px 5px 0;
    .form-control,
    .custom-select {
        border: none;
        border-radius: 0;
        border-right: 2px solid ${themeGet("colors.border")};
        height: 24px;
        flex: 1;
        &:not(:first-of-type) {
            border: none;
        }
        &:hover,
        &:focus {
            box-shadow: none;
        }
        &.error {
            color: ${themeGet("colors.danger")};
            border-color: ${themeGet("colors.danger")};
            &::placeholder {
                color: ${themeGet("colors.danger")};
            }
            &:-ms-input-placeholder {
                color: ${themeGet("colors.danger")};
            }
            &::-ms-input-placeholder {
                color: ${themeGet("colors.danger")};
            }
        }
    }

    .feedback-text,
    .form-control,
    .custom-select {
        padding-left: 15px;
        ${device.small} {
            padding-left: 20px;
        }
        ${device.medium} {
            padding-left: 30px;
        }
    }
`;

export const StyledInputGroupWrap = styled.div`
    display: flex;
    ${({ $dir }) =>
        $dir === "append" &&
        css`
            margin-left: -1px;
            .input-group-text,
            .btn {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            &:last-of-type {
                .input-group-text {
                    &:not(:last-of-type) {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                    }
                    & + .input-group-text {
                        margin-left: -1px;
                    }
                }
            }
        `}
    ${({ $dir }) =>
        $dir === "prepend" &&
        css`
            margin-right: -1px;
            .input-group-text,
            .btn {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            &:first-of-type {
                .input-group-text {
                    & + .input-group-text {
                        margin-left: -1px;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                }
            }
        `}
`;

export const StyledInputGroupText = styled.div`
    display: flex;
    align-items: center;
    padding: 0.46875rem 0.625rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${themeGet("colors.comet")};
    text-align: center;
    white-space: nowrap;
    background-color: ${themeGet("colors.whisper")};
    border: 1px solid ${themeGet("colors.heather")};
    border-radius: 0.25rem;
    font-size: inherit;
`;
