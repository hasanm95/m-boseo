import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledFooter = styled.footer`
    background-color: ${themeGet("colors.gray950")};
`;

export const StyledFooterTop = styled.div`
    padding: 70px 0;
    ${device.medium} {
        padding: 80px 0;
    }
    ${device.large} {
        padding: 100px 0;
    }
    ${device.xlarge} {
        padding: 120px 0;
    }
`;

export const StyledFooterBottm = styled.div`
    border-top: 1px solid ${themeGet("colors.border")};
    padding-top: 26px;
    padding-bottom: 31px;
`;

export const StyledCopyright = styled.p`
    padding-top: 3px;
    text-align: center;
    ${device.large} {
        text-align: left;
    }
`;
