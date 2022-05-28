import styled, { css } from "@boseo/shared/styled";

const feedbackStyles = ({ theme, state, showErrorOnly, showState }) => css`
    ${state !== "error" &&
    showErrorOnly &&
    css`
        display: none;
    `}
    ${state === "success" &&
    showState &&
    !showErrorOnly &&
    css`
        color: ${theme.colors.success};
    `};

    ${state === "warning" &&
    showState &&
    !showErrorOnly &&
    css`
        color: ${theme.colors.warning};
    `};
    ${state === "error" &&
    showState &&
    !showErrorOnly &&
    css`
        color: ${theme.colors.danger};
    `};
    ${state === "error" &&
    showState &&
    showErrorOnly &&
    css`
        color: ${theme.colors.danger};
    `};
`;

export const StyledFeedback = styled.div`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    ${feedbackStyles};
`;
