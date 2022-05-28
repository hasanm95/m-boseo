import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding: 57px 0;
    ${device.medium} {
        padding: 67px 0;
    }
    ${device.large} {
        padding: 77px 0;
    }
    .swiper {
        &-wrapper {
            align-items: center;
        }
    }
`;
