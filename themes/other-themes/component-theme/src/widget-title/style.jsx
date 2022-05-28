import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledTitle = styled.h3`
    font-size: ${themeGet("fontSizes.body")};
    margin-top: 0px;
    text-transform: uppercase;
    ${device.large} {
        margin-top: 7px;
        font-size: 18px;
    }
`;
