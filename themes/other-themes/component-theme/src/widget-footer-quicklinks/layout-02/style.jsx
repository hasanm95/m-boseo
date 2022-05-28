import styled, { themeGet, device } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledItem = styled.li`
    display: inline-block;
    &:not(:last-of-type) {
        margin-right: 20px;
        ${device.large} {
            margin-right: 30px;
        }
        ${device.xlarge} {
            margin-right: 38px;
        }
    }
`;

export const StyledLink = styled(Anchor)`
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
    font-weight: 600;
    letter-spacing: 0.114px;
    text-transform: capitalize;
    &:hover {
        color: ${themeGet("colors.primary")};
    }
`;
