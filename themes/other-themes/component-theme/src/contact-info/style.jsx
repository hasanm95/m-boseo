import styled, { themeGet, css, device } from "@boseo/shared/styled";

export const createStyles = (theme, layout) => css`
    ${layout === 2 &&
    css`
        .contact-info {
            &-icon {
                margin-right: 20px;
                i {
                    border-radius: 3px;
                    font-size: 40px;
                    ${device.small} {
                        font-size: 50px;
                    }
                }
            }
            &-content {
                ${device.small} {
                    align-items: center;
                    display: flex;
                }
            }
            &-title {
                line-height: 1.5;
                margin-bottom: 6px;
                br {
                    display: none;
                }
                ${device.small} {
                    margin-bottom: 0;
                    margin-right: 30px;
                    br {
                        display: block;
                    }
                }
                ${device.xlarge} {
                    margin-right: 68px;
                }
            }
            &-desc {
                color: ${theme.colors.primary};
                font-size: 26px;
                font-weight: 700;
                ${device.medium} {
                    font-size: 32px;
                }
            }
        }
    `}
`;

export const StyledInfo = styled.div`
    align-items: center;
    display: flex;
    ${device.small} {
        justify-content: center;
    }
`;

export const StyledIcon = styled.div`
    line-height: 1;
    margin-right: 20px;
    i {
        font-size: 34px;
        color: ${themeGet("colors.primary")};
    }
    ${device.medium} {
        margin-right: 30px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: ${themeGet("fontSizes.body")};
    line-height: 1.25;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

export const StyledContact = styled.p`
    line-height: 1;
    margin-bottom: 0;
`;
