import styled, { themeGet } from "@boseo/shared/styled";
import { Input } from "gatsby-theme-ui";

export const StyledInput = styled(Input)`
    border-color: transparent;
    padding: 6px 18px;
    &:focus {
        box-shadow: none;
        border-color: ${themeGet("colors.priamry")};
    }
`;
