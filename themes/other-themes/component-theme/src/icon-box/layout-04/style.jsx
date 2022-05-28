import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledBox = styled.div`
    background-color: ${themeGet("colors.white")};
    box-shadow: ${themeGet("shadows.default")};
    padding: 40px 30px 35px;
    text-align: center;
    transition: ${themeGet("transition")};
    ${device.small} {
        padding: 30px 20px 25px;
    }
    ${device.medium} {
        padding: 50px 35px 45px;
    }
    ${device.xlarge} {
        padding: 70px 45px 65px;
    }
    &:hover {
        background-color: ${themeGet("colors.primary")};
        .icon-box {
            &-img {
                filter: brightness(5);
            }
            &-title a,
            &-desc,
            &-link {
                color: ${themeGet("colors.white")};
            }
        }
    }
`;

export const StyledImg = styled.figure`
    margin-bottom: 25px;
    max-width: 90px;
    margin-left: auto;
    margin-right: auto;
    ${device.small} {
        margin-bottom: 20px;
        max-width: 70px;
    }
    ${device.medium} {
        margin-bottom: 30px;
    }
    ${device.xlarge} {
        margin-bottom: 45px;
        max-width: 90px;
    }
    img {
        transition: ${themeGet("transition")};
    }
`;
export const StyledTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
    ${device.medium} {
        margin-bottom: 20px;
    }
    ${device.xlarge} {
        margin-bottom: 25px;
    }
    a {
        color: ${themeGet("colors.heading")};
    }
`;

export const StyledDesc = styled.p`
    margin-bottom: 20px;
    transition: ${themeGet("transition")};
    ${device.medium} {
        margin-bottom: 25px;
    }
    ${device.xlarge} {
        margin-bottom: 39px;
    }
`;
