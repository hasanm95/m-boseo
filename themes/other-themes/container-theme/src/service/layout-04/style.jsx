import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    position: relative;
    isolation: isolate;
    padding-top: 56px;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 76px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 96px;
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-top: 116px;
        padding-bottom: 120px;
    }
`;

export const StyledBg = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    img {
        object-fit: cover;
    }
`;

export const StyledContent = styled.div`
    box-shadow: ${themeGet("shadows.default")};
    display: flex;
    flex-wrap: wrap;
    .icon-box {
        max-width: 100%;
        border-right-width: 0;
        border-bottom-width: 1px;
        ${device.small} {
            max-width: 50%;
        }
        ${device.large} {
            max-width: 33.33333%;
        }
        @media (min-width: 575px) and (max-width: 991px) {
            border-bottom-width: 1px;
            &:nth-of-type(odd) {
                border-right-width: 1px;
            }
            &:nth-last-of-type(-n + 2) {
                border-bottom-width: 0;
            }
        }
        ${device.large} {
            border-right-width: 1px;
            border-bottom-width: 1px;
            &:nth-of-type(3) {
                border-right-width: 0;
            }
            &:nth-last-of-type(-n + 3) {
                border-bottom-width: 0;
            }
        }

        &:last-of-type {
            border: none;
        }
    }
`;
