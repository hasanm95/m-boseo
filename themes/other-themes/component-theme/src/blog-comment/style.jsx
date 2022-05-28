import styled, { device } from "@boseo/shared/styled";

export const StyledComment = styled.div`
    margin-top: 40px;
    ${device.large} {
        margin-top: 60px;
    }
`;

export const StyledTitleWrap = styled.div`
    margin-bottom: 20px;
    ${device.large} {
        margin-bottom: 40px;
    }
`;
