import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 33px;
    padding-bottom: 30px;
    position: relative;
    z-index: 1;
    ${device.medium} {
        padding-top: 53px;
        padding-bottom: 98px;
    }
    ${device.large} {
        padding-top: 83px;
        padding-bottom: 77px;
    }
    ${device.xlarge} {
        padding-top: 98px;
    }
`;
export const StyledItems = styled.div`
    ${device.medium} {
        border-radius: 5px;
        box-shadow: ${themeGet("shadows.default")};
        display: flex;
        justify-content: space-around;
    }
`;
