import styled, { themeGet } from "@boseo/shared/styled";

export const StyledBrandLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${themeGet("transition")};
    &:hover {
        opacity: 0.2;
    }
`;
