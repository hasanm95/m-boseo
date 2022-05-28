import styled from "@boseo/shared/styled";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
} from "../style";

export const StyledInput = styled.input`
    ${InputStyles};
    ${({ state, showState, showErrorOnly }) =>
        state === "success" &&
        showState &&
        !showErrorOnly &&
        SuccessInputStyles};
    ${({ state, showState, showErrorOnly }) =>
        state === "warning" &&
        showState &&
        !showErrorOnly &&
        WarningInputStyles};
    ${({ state, showState, showErrorOnly }) =>
        state === "error" && showState && showErrorOnly && ErrorInputStyles};
`;
