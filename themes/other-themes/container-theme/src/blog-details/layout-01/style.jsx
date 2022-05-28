import styled, { device, themeGet } from "@boseo/shared/styled";
import { Anchor } from "gatsby-theme-ui";

export const StyledSection = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 100px;
        padding-bottom: 100px;
    }
`;

export const StyledBlogWrap = styled.div`
    ${device.large} {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const StyledBlogContent = styled.div`
    ${device.large} {
        max-width: calc(100% - 270px);
        flex-basis: calc(100% - 270px);
        padding-right: 70px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 25px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    ${device.medium} {
        font-size: 30px;
    }
    ${device.large} {
        font-size: 36px;
    }
`;

export const StyledBody = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 30px;
        font-weight: 600;
        line-height: 1.5;
    }
    blockquote {
        margin: 54px 65px 44px 70px;
        padding: 0px 0px 0px 20px;
        font-size: 18px;
        line-height: 1.78;
        font-weight: 600;
        border-inline-start: 4px solid rgb(210, 169, 142);
        position: relative;
        color: rgb(51, 51, 51);
        p {
            color: ${themeGet("colors.heading")};
            font-family: ${themeGet("fonts.body")};
            line-height: 30px;
            font-weight: 400;
        }
    }
    ul {
        margin-bottom: 21px;
        margin-left: 30px;
        li {
            position: relative;
            padding-left: 30px;
            &:before {
                position: absolute;
                left: 0;
                top: 50%;
                content: "";
                width: 14px;
                height: 2px;
                margin-top: -1px;
                background-color: ${themeGet("colors.primary")};
            }
            &:not(:last-of-type) {
                margin-bottom: 11px;
            }
        }
    }
`;

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 50px;
    padding-top: 30px;
    border-bottom: 1px solid ${themeGet("colors.border")};
    ${device.medium} {
        flex-direction: row;
        align-items: center;
    }
    ${device.large} {
        padding-bottom: 90px;
        padding-top: 50px;
    }
`;

export const StyledTag = styled(Anchor)`
    padding: 8px 13px;
    text-align: center;
    border: 1px solid ${themeGet("colors.border")};
    border-radius: 5px;
    color: ${themeGet("colors.text")};
    display: inline-block;
    font-weight: 400;
    text-transform: capitalize;
    &:not(:last-of-type) {
        margin-right: 9px;
    }
`;

export const StyledShare = styled.div`
    margin-top: 10px;
    ${device.medium} {
        margin-top: 0;
    }
    span {
        color: ${themeGet("colors.heading")};
        font-weight: 600;
        margin-right: 12px;
    }
`;

export const StyledSocialLink = styled.a`
    display: inline-block;
    &:not(:last-of-type) {
        margin-right: 14px;
    }
`;

export const StyledBlogSidebar = styled.aside`
    margin-top: 40px;
    ${device.medium} {
        max-width: 350px;
        flex-basis: 350px;
    }
    ${device.large} {
        margin-top: 0;
        max-width: 270px;
        flex-basis: 270px;
    }
`;
