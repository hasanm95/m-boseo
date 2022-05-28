import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 55px;
    padding-bottom: 30px;
    position: relative;
    z-index: 1;
    ${device.medium} {
        padding-top: 71px;
        padding-bottom: 98px;
    }
    ${device.large} {
        padding-top: 90px;
        padding-bottom: 119px;
    }
    ${device.xlarge} {
        padding-top: 110px;
        padding-bottom: 139px;
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
