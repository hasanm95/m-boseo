import styled, { css, device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 56px;
    ${device.medium} {
        padding-top: 76px;
        padding-bottom: 19px;
    }
    ${device.large} {
        padding-top: 96px;
    }
    ${device.xlarge} {
        padding-top: 116px;
    }
`;

export const StyledPlans = styled.div`
    ${({ active }) =>
        active &&
        css`
            .monthly {
                display: none;
            }
            .annualy {
                display: block;
            }
        `}

    ${({ active }) =>
        !active &&
        css`
            .monthly {
                display: block;
            }
            .annualy {
                display: none;
            }
        `}
`;

export const StyledItems = styled.div`
    ${device.medium} {
        border-radius: 5px;
        box-shadow: ${themeGet("shadows.default")};
        display: flex;
        justify-content: space-around;
    }
`;
