import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledFooter = styled.footer`
    background-color: ${themeGet("colors.white")};
    padding-bottom: 110px;
    padding-top: 50px;
    position: relative;
    ${device.medium} {
        padding-bottom: 180px;
        padding-top: 70px;
    }
    ${device.large} {
        padding-bottom: 250px;
        padding-top: 90px;
    }
    ${device.xlarge} {
        padding-bottom: 320px;
        padding-top: 100px;
    }
    ${device.xxlarge} {
        padding-bottom: 400px;
    }
    .layer-shape {
        &-one,
        &-two {
            position: absolute !important;
            left: 0;
            bottom: 0;
        }
    }
`;
export const StyledCopyright = styled.p`
    font-size: 14px;
    margin-top: 15px;
`;
