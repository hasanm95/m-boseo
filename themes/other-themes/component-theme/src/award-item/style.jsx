import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledAward = styled.div`
    box-shadow: ${themeGet("shadows.default")};
    max-width: 265px;
    padding: 30px 20px 20px;
    position: relative;
    background-color: ${themeGet("colors.white")};
    ${device.xlarge} {
        padding: 40px 40px 42px;
    }
`;

export const StyledTitle = styled.p`
    margin-top: 32px;
    font-size: 18px;
`;
