import styled, { css } from "@boseo/shared/styled";

export const StyledList = styled.ul`
    ${({ column }) =>
        column === 2 &&
        css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        `}
`;
