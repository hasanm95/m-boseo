import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledBlog = styled.article`
    border-radius: 5px;
    box-shadow: ${themeGet("shadows.gray50lg")};

    &:hover {
        .content {
            background-color: ${themeGet("colors.primary")};
        }
        .title a,
        .excerpt,
        .author,
        .date,
        .share {
            color: ${themeGet("colors.white")};
        }
        .author:after {
            background-color: ${themeGet("colors.white")};
        }
    }
    ${device.medium} {
        display: flex;
    }
`;

export const StyledMedia = styled.div`
    ${device.medium} {
        max-width: 43%;
        flex-basis: 43%;
        border-radius: 5px 0 0 5px;
        .gatsby-image-wrapper,
        img {
            border-radius: 5px 0 0 5px;
            height: 100%;
        }
    }
    ${device.large} {
        max-width: 65.813%;
        flex-basis: 65.813%;
    }
`;

export const StyledThumb = styled.figure`
    position: relative;
    height: 100%;
    &:after {
        background-color: rgba(255, 255, 255, 0.5);
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: 0.5s;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    &:hover {
        &:after {
            opacity: 1;
        }
    }
`;

export const StyledVideoBtn = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    background: ${themeGet("colors.white")};
    z-index: 9;
    height: 60px;
    border-radius: 50%;
    color: ${themeGet("colors.primary")};
`;

export const StyledQuote = styled.blockquote`
    position: relative;
    text-align: center;
    margin: 0;
    padding: 22px 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${themeGet("colors.gray300")};
    i {
        font-size: 24px;
        color: ${themeGet("colors.primary")};
    }
    h3 {
        color: ${themeGet("colors.text2")};
    }
    footer {
        color: ${themeGet("colors.heading")};
    }
    ${device.large} {
        padding: 22px 40px;
    }
`;
export const StyledContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 20px 50px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: auto;
    transition: ${themeGet("transition")};
    ${device.medium} {
        max-width: calc(100% - 43%);
        flex-basis: calc(100% - 43%);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    ${device.large} {
        max-width: calc(100% - 65.813%);
        flex-basis: calc(100% - 65.813%);
        padding: 58px 35px 70px;
    }
`;

export const StyledTitle = styled.h3`
    line-height: 1.5;
    font-size: 20px;
    margin-bottom: 20px;
    a {
        color: ${themeGet("colors.black")};
    }
    ${device.large} {
        margin-bottom: 31px;
    }
`;

export const StyledExcerpt = styled.p`
    margin: 21px 0 12px;
`;

export const StyledBottom = styled.div`
    padding-top: 27px;
    border-top: 1px solid ${themeGet("colors.athens")};
    display: flex;
    justify-content: space-between;
    margin-bottom: -8px;
    margin-top: 25px;
`;

export const StyledAuthor = styled.span`
    font-weight: 500;
    margin-left: 4px;
    margin-right: 23px;
    position: relative;
    color: ${themeGet("colors.chalice")};
    a {
        color: ${themeGet("colors.primary")};
    }
    &:after {
        background-color: ${themeGet("colors.heading")};
        content: "";
        height: 2px;
        position: absolute;
        right: -15px;
        top: 39%;
        width: 3px;
    }
`;

export const StyledDate = styled.span`
    color: ${themeGet("colors.chalice")};
`;

export const StyledShare = styled.div`
    position: relative;
    &:hover {
        .sharelist {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const StyledShareList = styled.div`
    background-color: ${themeGet("colors.white")};
    border-radius: 5px;
    box-shadow: ${themeGet("shadows.gray25")};
    display: flex;
    margin: 0;
    opacity: 0;
    padding: 8px 3px 8px 17px;
    position: absolute;
    right: 0;
    top: -44px;
    visibility: hidden;
    &:before {
        bottom: -33px;
        content: "";
        height: 40px;
        left: 0;
        position: absolute;
        right: 0;
        z-index: 1;
    }
    &:after {
        border-color: transparent transparent #fff transparent;
        border-style: solid;
        border-width: 9px;
        bottom: -8px;
        box-shadow: ${themeGet("shadows.gray25")};
        content: "";
        position: absolute;
        right: 6px;
        transform: rotate(45deg);
    }
`;

export const StyledShareLink = styled.a`
    margin-right: 13px;
    line-height: 1;
    font-size: 12px;
`;
