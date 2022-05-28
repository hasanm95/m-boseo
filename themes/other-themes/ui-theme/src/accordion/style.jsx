import styled, { device, css } from "@boseo/shared/styled";

const accordionStyles = ({ theme, space, layout }) => css`
    .accordion {
        &__item {
            margin-bottom: ${space};
        }
    }

    ${layout === 1 &&
    css`
        .accordion {
            &__button {
                cursor: pointer;
                color: ${theme.colors.heading};
                padding: 0 0 10px;
                font-size: ${theme.fontSizes.body};
                font-weight: 600;
                font-family: ${theme.fonts.heading};
                text-align: left;
                width: 100%;
                border-bottom: 1px solid ${theme.colors.border};
                display: flex;
                justify-content: space-between;
                align-items: center;
                ${device.small} {
                    font-size: 18px;
                }
                ${device.medium} {
                    font-size: 20px;
                    padding: 0 0 13px;
                }
                .icon {
                    position: relative;
                    width: 10px;
                    &:before,
                    &:after {
                        position: absolute;
                        content: "";
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: ${theme.colors.black};
                    }
                    &:before {
                        width: 10px;
                        height: 2px;
                    }
                    &:after {
                        width: 2px;
                        height: 10px;
                    }
                }
                &[aria-expanded="true"] {
                    .icon {
                        &:after {
                            display: none;
                        }
                    }
                }
            }
            &__panel {
                padding-top: 20px;
                padding-bottom: 10px;
                ${device.medium} {
                    padding-top: 30px;
                }
            }
        }
    `}

    ${layout === 2 &&
    css`
        .accordion {
            &__button {
                color: ${theme.colors.heading};
                background-color: ${theme.colors.white};
                box-shadow: ${theme.shadows.gray35};
                border: none;
                border-radius: 5px;
                font-size: 15px;
                font-weight: 500;
                padding: 10px 25px;
                width: 100%;
                transition: ${theme.transition};
                font-family: ${theme.fonts.heading};
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                ${device.medium} {
                    font-size: 20px;
                    font-weight: 600;
                    padding: 15px 30px;
                }
                .icon {
                    position: relative;
                    width: 10px;
                    height: 10px;
                    &:before,
                    &:after {
                        position: absolute;
                        content: "";
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: ${theme.colors.black};
                    }
                    &:before {
                        width: 10px;
                        height: 2px;
                    }
                    &:after {
                        width: 2px;
                        height: 10px;
                    }
                }
                &[aria-expanded="true"] {
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.white};
                    .icon {
                        &:after {
                            display: none;
                        }
                        &:before {
                            background: ${theme.colors.white};
                        }
                    }
                }
            }
            &__panel {
                line-height: ${theme.lineHeights.body};
                padding: 24px 20px 10px;
                ${device.medium} {
                    padding: 34px 30px 10px;
                }
            }
        }
    `}
`;

export const StyledAccordion = styled.div`
    ${accordionStyles}
`;
