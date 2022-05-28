import styled from "@boseo/shared/styled";
import { Link } from "gatsby";

export const StyledLogo = styled(Link)`
    display: block;
    line-height: 1;
    .logo {
        &-main {
        }
        &-light {
            display: none !important;
        }
    }
`;
