import styled, { themeGet } from "@boseo/shared/styled";

export const StyledWrap = styled.div`
    background-color: white;
    box-shadow: ${themeGet("shadows.default")};
    padding: 57px 40px 60px;
    position: relative;
    z-index: 1;
`;

export const StyledTitle = styled.h4`
    font-size: 20px;
    margin-bottom: 30px;
`;
