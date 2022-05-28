import styled, { themeGet, device } from "@boseo/shared/styled";
import { Button } from "gatsby-theme-ui";

export const StyledBox = styled.div`
    position: relative;
    ${device.small} {
        padding-right: 30px;
    }
`;

export const StyledImg = styled.div`
    margin-bottom: 31px;
    position: relative;
    ${device.large} {
        margin-bottom: 50px;
    }
    .shape-img {
        left: 28px;
        position: absolute !important;
        top: 17px;
    }
`;

export const StyledTitle = styled.h3`
    margin-bottom: 19px;
    font-size: 18px;
    ${device.large} {
        margin-bottom: 23px;
        font-size: 20px;
    }
    a {
        color: ${themeGet("colors.heading")};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;
export const StyledBtn = styled(Button)`
    position: relative;
    margin-top: 19px;
    ${device.large} {
        margin-top: 39px;
    }
    &:after {
        background-color: ${themeGet("colors.apricot")};
        bottom: -3px;
        content: "";
        height: 1px;
        right: 0;
        position: absolute;
        width: 0;
        transition: 0.3s;
    }
    &:hover {
        &:after {
            left: 0;
            width: 100%;
        }
    }
`;
