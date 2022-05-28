import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledWrap = styled.div`
    background-color: ${themeGet("colors.white")};
    border-radius: 5px;
    position: relative;
    text-align: center;
    margin-top: 55px;
    padding: 80px 15px 40px;
    ${device.medium} {
        margin-top: 70px;
        padding: 100px 30px 44px;
    }
    ${device.xlarge} {
        padding: 134px 125px 110px;
    }
`;

export const StyledThumb = styled.div`
    border-radius: 50%;
    box-shadow: ${themeGet("shadows.xs")};
    display: inline-block;
    left: 50%;
    position: absolute;
    top: -55px;
    transform: translateX(-50%);
    ${device.medium} {
        box-shadow: ${themeGet("shadow.gray35lg")};
    }
    img,
    .gatsby-image-wrapper {
        border-radius: 50%;
    }
`;

export const StyledContent = styled.div`
    margin-bottom: 20px;
    ${device.medium} {
        margin-bottom: 34px;
    }
    ${device.xlarge} {
        margin-bottom: 62px;
    }
`;

export const StyledDesc = styled.p`
    color: ${themeGet("colors.black")};
    font-family: ${themeGet("fonts.heading")};
    ${device.small} {
        font-size: 18px;
        font-weight: 500;
    }
    ${device.large} {
        font-size: 20px;
    }
    ${device.xlarge} {
        font-size: 24px;
        line-height: 40px;
    }
`;

export const StyledName = styled.h3`
    color: ${themeGet("colors.primary")};
    font-size: 18px;
    margin-bottom: 5px;
    ${device.medium} {
        margin-bottom: 10px;
    }
    ${device.xlarge} {
        margin-bottom: 15px;
    }
`;

export const StyledDesignation = styled.p`
    color: ${themeGet("colors.chalice")};
`;
