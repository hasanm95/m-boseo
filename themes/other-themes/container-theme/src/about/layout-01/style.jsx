import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 60px;
    ${device.medium} {
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-bottom: 120px;
    }
`;

export const StyledBtnWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    ${device.large} {
        margin-top: 50px;
    }
    ${device.xlarge} {
        margin-top: 76px;
    }
`;
