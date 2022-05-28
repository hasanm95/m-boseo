import styled, { css } from "@boseo/shared/styled";
import { InputGroup } from "gatsby-theme-ui";

const inputStyle = ({ theme, layout }) => css`
    ${layout === 2 &&
    css`
        background-color: rgba(255, 255, 255, 0.5);
        .form-control {
            background-color: transparent;
            color: ${theme.colors.white};
            &::placeholder {
                color: ${theme.colors.white};
            }
            &:focus {
                background-color: transparent;
            }
        }
    `}
`;

export const StyledInputGroup = styled(InputGroup)`
    padding: 5px;
    max-width: 100%;
    .form-control {
        border-right: none;
        width: 100%;
    }
    .btn {
        height: 50px;
    }
    ${inputStyle}

    @media only screen and (max-width: 575px) {
        .form-control {
            padding-left: 10px;
        }
        .form-control,
        .btn {
            height: 40px;
        }
    }
`;
