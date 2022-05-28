import styled, { device } from "@boseo/shared/styled";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
} from "../style";

export const StyledTextarea = styled.textarea`
    height: auto;
    padding-top: 15px;
    min-height: 80px;
    ${device.large} {
        padding-top: 20px;
        min-height: 100px;
    }
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
