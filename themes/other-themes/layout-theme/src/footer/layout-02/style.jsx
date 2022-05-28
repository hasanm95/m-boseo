import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledFooter = styled.footer`
    background: ${themeGet("colors.athens")};
`;

export const StyledFooterTop = styled.div`
    padding: 35px 0 60px;
    position: relative;
    overflow: hidden;
    ${device.medium} {
        padding: 35px 0 80px;
    }
    ${device.large} {
        padding: 54px 0 100px;
    }
    ${device.xlarge} {
        padding-top: 73px;
        padding-bottom: 120px;
    }
    .bg-map-img {
        left: 50%;
        position: absolute !important;
        top: 0;
        transform: translateX(-50%);
        z-index: 1;
        max-width: 863px;
    }
    .newsletter-form {
        position: relative;
        z-index: 2;
    }
`;

export const StyledFooterBottom = styled.div`
    border-top: 1px solid ${themeGet("colors.border")};
    padding: 30px 0;
    .container-fluid {
        padding: 0 15px;
        ${device.xlarge} {
            padding: 0 60px;
        }
    }
`;

export const StyledCopyright = styled.p`
    font-size: 14px;
    line-height: 1;
    text-align: center;
    ${device.medium} {
        text-align: right;
    }
    ${device.large} {
        margin-left: 13px;
        text-align: left;
        line-height: 1.4;
    }
    ${device.xlarge} {
        margin-left: 23px;
        text-align: left;
    }
`;
