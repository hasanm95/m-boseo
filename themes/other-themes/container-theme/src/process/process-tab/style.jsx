import styled, { themeGet, device, css } from "@boseo/shared/styled";
import { Tabs } from "react-tabs";

export const StyledSection = styled.section`
    ${({ spacing }) =>
        spacing === 1 &&
        css`
            padding-bottom: 60px;
            ${device.medium} {
                padding-bottom: 80px;
            }
            ${device.large} {
                padding-bottom: 70px;
            }
            ${device.xlarge} {
                padding-bottom: 120px;
            }
        `}
    ${({ spacing }) =>
        spacing === 2 &&
        css`
            padding-bottom: 60px;
            padding-top: 56px;
            ${device.medium} {
                padding-bottom: 80px;
                padding-top: 76px;
            }
            ${device.large} {
                padding-top: 96px;
                padding-bottom: 70px;
            }
            ${device.xlarge} {
                padding-top: 116px;
                padding-bottom: 120px;
            }
        `}
`;

export const StyledTabs = styled(Tabs)`
    .react-tabs {
        &__tab-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        &__tab {
            background-color: ${themeGet("colors.white")};
            border-radius: 12px;
            box-shadow: ${themeGet("shadows.md")};
            position: relative;
            margin-bottom: 7px;
            margin-right: 10px;
            width: calc(50% - 5px);
            &:nth-of-type(even) {
                margin-right: 0;
            }
            ${device.small} {
                width: 25%;
                margin-bottom: 0;
                margin-right: 0;
            }
            ${device.large} {
                width: 24%;
                margin-bottom: -1px;
                margin-right: 0;
            }
            &--selected {
                .content {
                    color: ${themeGet("colors.primary")};
                }
                .bottom-line {
                    background-color: ${themeGet("colors.primary")};
                    left: 0;
                    width: calc(100% - 3px);
                }
            }
            &:first-of-type {
                .nav-btn {
                    ${device.large} {
                        padding: 39px 30px 39px 42px;
                    }
                    ${device.xlarge} {
                        padding: 39px 66px;
                    }
                }
                &:before {
                    display: none;
                }
            }
            &:before {
                background-color: ${themeGet("colors.white")};
                content: "";
                height: 100%;
                left: -15px;
                position: absolute;
                top: 0;
                width: 50px;
                display: none;
                ${device.small} {
                    display: block;
                }
            }
        }
    }
`;

export const StyledWrap = styled.button`
    background-color: ${themeGet("colors.white")};
    border: 1px solid ${themeGet("colors.white")};
    border-radius: 12px;
    color: ${themeGet("colors.heading")};
    display: flex;
    font-family: ${themeGet("fonts.heading")};
    font-weight: 600;
    font-size: 14px;
    line-height: 1.44;
    width: 100%;
    padding: 39px 10px 39px 10px;
    position: relative;
    transition: ${themeGet("transition")};
    ${device.small} {
        justify-content: center;
    }
    ${device.medium} {
        font-size: 18px;
        padding: 39px 10px 39px 10px;
    }
    ${device.large} {
        padding: 39px 15px 39px 80px;
    }
    ${device.xlarge} {
        padding: 39px 15px 39px 94px;
    }
    &:focus {
        border: 1px solid ${themeGet("colors.white")};
    }
    &:hover {
        color: ${themeGet("colors.primary")};
    }
    &:before {
        background-color: ${themeGet("colors.white")};
        content: "";
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        z-index: 2;
        border-radius: 0 12px 12px 0;
    }
    &:after {
        background-color: ${themeGet("colors.white")};
        box-shadow: ${themeGet("shadows.md")};
        content: "";
        height: 98px;
        position: absolute;
        right: -38px;
        top: 15px;
        width: 97px;
        z-index: 1;
        transform: rotate(45deg);
        border-radius: 12px 20px 12px 0;
        display: none;
        ${device.large} {
            display: block;
        }
    }
`;

export const StyledLinkContent = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    z-index: 3;
    text-align: left;
`;

export const StyledImg = styled.div`
    width: 28px;
    height: 28px;
    margin-right: 8px;
    ${device.medium} {
        height: 38px;
        margin-right: 12px;
        width: 38px;
    }
    ${device.xlarge} {
        margin-right: 15px;
    }
`;

export const StyledWhiteShape = styled.span`
    background-color: ${themeGet("colors.white")};
    height: 100%;
    position: absolute;
    right: 7px;
    top: 0;
    width: 60%;
    z-index: 2;
`;

export const StyledBottomLine = styled.span`
    background-color: transparent;
    border-radius: 0 0 10px 10px;
    bottom: 0;
    height: 5px;
    right: 0;
    position: absolute;
    width: 0;
    z-index: 3;
    transition: ${themeGet("transition")};
`;

export const StyledTabContent = styled.div`
    margin-top: 23px;
    ${device.medium} {
        margin-top: 40px;
    }
    ${device.large} {
        margin-top: 55px;
    }
`;
