import styled, { device } from "@boseo/shared/styled";

export const OffCanvasBodyWrap = styled.div`
    margin-top: 20px;
    margin-right: 25px;
    margin-bottom: 100px;
    margin-left: 40px;
    overflow: hidden;
    @media ${device.xsmall} {
        margin: 20px 30px 100px;
    }
`;
