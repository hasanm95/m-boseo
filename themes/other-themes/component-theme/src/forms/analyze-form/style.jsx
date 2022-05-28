import styled, { device, css } from "@boseo/shared/styled";
import { InputGroup } from "gatsby-theme-ui";

const groupStyles = ({ theme, layout }) => css`
    ${layout === 1 &&
    css`
        max-width: 460px;
        margin-left: auto;
        margin-right: auto;
        ${device.small} {
            max-width: 650px;
        }
    `}
    ${layout === 2 &&
    css`
        .form-control {
            border-right: none;
        }
        ${device.small} {
            max-width: 452px;
        }
    `}
    @media only screen and (max-width: 575px) {
        ${layout === 1 &&
        css`
            display: block;
            .form-control {
                border-right: none;
                border-bottom: 1px solid ${theme.colors.border};
                height: 50px;
                height: 45px;
            }
            .btn {
                display: block;
                width: 100%;
                height: 45px;
            }
        `}
        ${layout === 2 &&
        css`
            .form-control {
                height: 45px;
                padding-left: 10px;
            }

            .btn {
                height: 45px;
            }
        `}
    }
`;

export const StyledInputGroup = styled(InputGroup)`
    padding: 5px;
    ${groupStyles};
    .form-control {
        ${device.small} {
            width: 200px;
        }
        ${device.medium} {
            width: 100%;
        }
    }
    .btn {
        height: 50px;
    }
`;
