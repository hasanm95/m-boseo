import styled, { css, device } from "@boseo/shared/styled";

export const createStyles = (
    theme,
    navStyle,
    navPosition,
    shadowSize,
    dotStyle,
    dotPosition
) => css`
    ${!!shadowSize &&
    css`
        .swiper-slide {
            & > * {
                &:before {
                    opacity: 1;
                    transition: ${theme.transition};
                }
            }
            &:not(.swiper-slide-visible) {
                & > * {
                    box-shadow: none;
                    &:before {
                        opacity: 0;
                    }
                }
            }
        }
    `}
    ${shadowSize === "lg" &&
    css`
        .swiper {
            padding: 0 15px 45px;
            margin: 0 -15px -45px !important;
            ${device.medium} {
                padding: 0 30px 65px;
                margin: 0 -30px -65px !important;
            }
        }
    `}

    ${shadowSize === "md" &&
    css`
        .swiper {
            padding: 20px 25px 25px;
            margin: -20px -25px -25px !important;
        }
    `}

    ${navStyle === 1 &&
    css`
        .swiper {
            &-btn {
                display: block;
                width: 50px;
                height: 50px;
                z-index: 1;
                box-shadow: ${theme.shadows.xxl};
                color: ${theme.colors.heading};
                background-color: ${theme.colors.white};
                border-radius: 5px;
            }
        }
    `}

    ${navStyle === 2 &&
    css`
        .swiper {
            &-btn {
                border: 1px solid ${theme.colors.chalice};
                border-radius: 5px;
                color: ${theme.colors.chalice};
                font-size: 16px;
                height: 40px;
                line-height: 40px;
                width: 40px;
                &:hover,
                &:focus {
                    border: 1px solid ${theme.colors.heading};
                    color: ${theme.colors.heading};
                }
            }
        }
    `}
    ${navStyle === 3 &&
    css`
        .swiper {
            &-btn {
                border: 1px solid ${theme.colors.chalice};
                border-radius: 50%;
                color: ${theme.colors.chalice};
                font-size: 16px;
                height: 40px;
                line-height: 40px;
                width: 40px;
                &:hover,
                &:focus {
                    border: 1px solid ${theme.colors.heading};
                    color: ${theme.colors.heading};
                }
            }
        }
    `}

    ${navStyle === 4 &&
    css`
        .swiper {
            &-btn {
                font-size: 25px;
                transition: ${theme.transition};
                z-index: 2;
                &:hover {
                    color: ${theme.colors.primary};
                }
                ${device.xlarge} {
                    font-size: 30px;
                }
            }
        }
    `}

    ${navStyle === 5 &&
    css`
        .swiper {
            &-wrap {
                margin-bottom: 25px;
            }
            &-btn {
                background-color: ${theme.colors.gray150};
                border-radius: 5px;
                height: 50px;
                font-size: 16px;
                width: 50px;
                z-index: 1;
                color: ${theme.colors.white};
                &:hover,
                &:focus {
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.white};
                }
            }
        }
    `}

    ${navStyle === 6 &&
    css`
        .swiper {
            &-btn {
                background-color: ${theme.colors.sand};
                color: ${theme.colors.chalice};
                border-radius: 5px;
                height: 40px;
                font-size: 16px;
                width: 40px;
                line-height: 42px;
                z-index: 1;
                &:hover,
                &:focus {
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.white};
                }
            }
        }
    `}

    ${navPosition === 1 &&
    css`
        .swiper {
            &-btn {
                margin: 0;
                position: absolute;
                right: 0;
                top: -80px;
                ${device.medium} {
                    top: -110px;
                }
                ${device.large} {
                    top: -137px;
                }
                &-prev {
                    margin-right: 10px;
                    right: 40px;
                }
            }
        }
        ${navStyle === 6 &&
        css`
            .swiper {
                &-btn {
                    &-prev{
                        margin-right: 20px;
                    }
            }
        `}
    `}

    ${navPosition === 2 &&
    css`
        .swiper {
            &-btn {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                &-prev {
                    left: -13px;
                    ${device.xxlarge} {
                        left: -20px;
                    }
                }
                &-next {
                    right: -13px;
                    ${device.xxlarge} {
                        right: -20px;
                    }
                }
            }
        }
    `}

    ${navPosition === 3 &&
    css`
        .swiper {
            &-btn {
                position: absolute;
                top: -65px;
                right: 8%;
                z-index: 1;
                &-prev {
                    margin-right: 10px;
                    right: calc(8% + 30px);
                }
                ${device.medium} {
                    top: -95px;
                }
                ${device.large} {
                    top: -110px;
                    right: 12%;
                    &-prev {
                        right: calc(12% + 40px);
                    }
                }
                ${device.xlarge} {
                    right: 19.3%;
                    &-prev {
                        right: calc(19.3% + 40px);
                    }
                }
            }
        }

        @container (min-width: 700px) {
            .swiper-btn-prev {
                margin-right: 20px;
            }
        }
    `}

    ${navPosition === 4 &&
    css`
        .swiper {
            &-btn {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                &-prev {
                    left: 20px;
                }
                &-next {
                    right: 20px;
                }
            }
        }
    `}

    ${navPosition === 5 &&
    css`
        .swiper {
            &-btn {
                margin-top: 20px;
                ${device.medium} {
                    margin-top: 30px;
                }
                ${device.xlarge} {
                    margin-top: 40px;
                }
                &-next {
                    margin-left: 20px;
                }
            }
        }
    `}


    ${dotStyle === 1 &&
    css`
        .swiper-pagination {
            &-bullet {
                background-color: transparent;
                border: 1px solid ${theme.colors.primary};
                border-radius: 50%;
                height: 12px;
                width: 12px;
                margin: 0 7px !important;
                &-active {
                    background-color: ${theme.colors.primary};
                }
            }
        }
    `}

    ${dotPosition === 1 &&
    css`
        .swiper-pagination {
            bottom: 0 !important;
        }
    `}
`;

export const StyledWrap = styled.div`
    position: relative;
`;
