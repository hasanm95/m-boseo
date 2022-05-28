import styled, { themeGet, css } from "@boseo/shared/styled";

const thumbStyle = ({ theme, layout }) => css`
    img,
    .gatsby-image-wrapper {
        width: 100%;
    }
    ${layout === 1 &&
    css`
        img,
        .gatsby-image-wrapper {
            border-radius: 5px 5px 0 0px;
        }
    `}
    ${layout === 2 &&
    css`
        img,
        .gatsby-image-wrapper {
            border-radius: 5px 5px 0 0px;
        }
    `}
    ${layout === 2 &&
    css`
        &:after {
            background-color: rgba(255, 255, 255, 0.5);
            bottom: 0;
            content: "";
            position: absolute;
            inset: 0;
            transition: ${theme.transition};
            opacity: 0;
        }
        &:hover {
            &:after {
                opacity: 1;
            }
        }
    `}
    ${layout === 3 &&
    css`
        &:after {
            background-color: rgba(0, 0, 0, 0.3);
            bottom: 0;
            content: "";
            position: absolute;
            inset: 0;
            transition: ${theme.transition};
        }
    `}
`;

export const StyledThumb = styled.figure`
    position: relative;
    ${thumbStyle}
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
    /* padding: 22px 10px; */
    padding: 50px 15px;
    background: ${themeGet("colors.foncrete")};
    font-style: italic;
    i {
        font-size: 24px;
        color: ${themeGet("colors.primary")};
    }
    h3 {
        color: ${themeGet("colors.text2")};
        font-size: 20px;
        font-weight: 500;
        margin: 12px 0;
    }
    footer {
        color: ${themeGet("colors.heading")};
    }
`;
