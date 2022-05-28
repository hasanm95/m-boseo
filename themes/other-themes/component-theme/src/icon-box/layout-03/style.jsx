import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledBox = styled.div`
    border-width: 0;
    border-style: solid;
    border-color: ${themeGet("colors.gallery")};
    padding: 30px;
    background-color: ${themeGet("colors.white")};
    position: relative;
    transition: ${themeGet("transition")};
    ${device.large} {
        padding: 49px 35px 39px;
    }
    &:hover {
        background-color: ${themeGet("colors.primary")};
        .icon-box {
            &-img {
                filter: brightness(5);
            }
            &-title {
                color: ${themeGet("colors.white")};
                a {
                    color: ${themeGet("colors.white")};
                }
            }
            &-desc,
            &-numb {
                color: ${themeGet("colors.white")};
            }
        }
    }
`;

export const StyledImg = styled.div`
    margin-bottom: 26px;
    img {
        width: 60px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 25px;
    a {
        color: ${themeGet("colors.heading")};
    }
`;

export const StyledBoxNumb = styled.span`
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
    font-weight: 700;
    position: absolute;
    right: 58px;
    top: 33px;
    transition: ${themeGet("transition")};
`;
