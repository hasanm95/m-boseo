import styled, { device, themeGet } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    ${device.medium} {
        justify-content: flex-start;
    }
    ${device.xlarge} {
        justify-content: center;
    }
`;

export const StyledItem = styled.li`
    line-height: 1;
    padding: 0 14px;
    &:first-of-type {
        padding-left: 0;
    }
    ${device.large} {
        padding: 0 25px;
    }
    ${device.xlarge} {
        padding: 0 38px;
    }
`;

export const StyledLink = styled(Anchor)`
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    ${device.medium} {
        font-size: 14px;
    }
`;
