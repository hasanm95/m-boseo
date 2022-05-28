import styled, { device } from "@boseo/shared/styled";

export const StyledMap = styled.div`
    width: 100%;
    height: 350px;
    ${device.medium} {
        height: 500px;
    }
    ${device.large} {
        height: 700px;
    }
`;
