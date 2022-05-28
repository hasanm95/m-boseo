import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding: 56px 0 53px;
    ${device.medium} {
        padding: 76px 0 73px;
    }
    ${device.large} {
        padding: 96px 0 93px;
    }
    ${device.xlarge} {
        padding: 116px 0 113px;
    }
    .swiper {
        &-wrapper {
            align-items: center;
        }
    }
`;
