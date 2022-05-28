import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledBlog = styled.article`
    border-radius: 5px;
    position: relative;
`;

export const StyledContent = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    z-index: 1;
    width: 100%;
    ${device.small} {
        padding-bottom: 25px;
        padding-left: 35px;
        padding-right: 35px;
    }
    ${device.large} {
        padding-left: 45px;
        padding-right: 45px;
    }
`;
export const StyledTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 0;
    line-height: 1.5;
    ${device.large} {
        font-size: 20px;
    }
    a {
        color: ${themeGet("colors.white")};
    }
    &:hover {
        a {
            border-color: ${themeGet("colors.white")};
        }
    }
`;
