import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 0;
    padding-bottom: 57px;
    background-color: ${themeGet("colors.gray950")};
    ${device.medium} {
        padding-bottom: 77px;
    }
    ${device.large} {
        padding-bottom: 97px;
    }
    ${device.xlarge} {
        padding-bottom: 117px;
    }
    .swiper {
        &-wrapper {
            align-items: center;
        }
    }
`;
