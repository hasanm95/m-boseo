import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 41px;
    position: relative;
    z-index: 1;
`;

export const StyledBtnWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    ${device.xlarge} {
        margin-top: 56px;
    }
`;
