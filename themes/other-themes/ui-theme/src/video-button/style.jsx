import styled, { themeGet } from "@boseo/shared/styled";

export const StyledButton = styled.button`
    color: ${themeGet("colors.primary")};
    display: inline-flex;
    align-items: center;
    font-family: ${themeGet("fonts.heading")};
    font-weight: ${themeGet("fontWeights.heading")};
    font-size: 14px;
    letter-spacing: 0.115px;
    line-height: 1.4;
    padding: 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    i {
        font-size: 36px;
        margin-right: 9px;
    }
    &:hover {
        color: ${themeGet("colors.heading")};
    }
`;
