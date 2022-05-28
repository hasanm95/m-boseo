import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 118px;
    position: relative;
    ${device.medium} {
        padding-bottom: 139px;
    }
    ${device.large} {
        padding-bottom: 158px;
    }
    ${device.xlarge} {
        padding-bottom: 178px;
    }
`;
