import styled, { themeGet } from "@boseo/shared/styled";

export const OffCanvasHeaderWrap = styled.div`
    background-color: ${themeGet("colors.white")};
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const OffCanvasHeaderLeft = styled.div`
    flex: 1 0 80%;
`;

export const OffCanvasHeaderRight = styled.div`
    flex: 1 0 20%;
    text-align: right;
`;
