import styled, { themeGet, css, device } from "@boseo/shared/styled";

const pricingStyles = ({ theme, isPopular }) => css`
    ${isPopular &&
    css`
        ${device.medium} {
            width: 35.041334%;
            transform: translateY(-19px);
            padding: 39px 15px 55px;
            box-shadow: ${theme.shadows.default};
            background-color: ${theme.colors.white};
        }
        ${device.large} {
            padding: 61px 75px 87px;
        }
    `}
`;

export const StyledPricing = styled.div`
    padding: 32px 15px 55px;
    text-align: center;
    box-shadow: ${themeGet("shadows.default")};
    position: relative;
    overflow: hidden;
    background: ${themeGet("colors.white")};
    ${device.medium} {
        width: 32.479333%;
        margin-bottom: -38px;
        box-shadow: none;
        background: transparent;
    }
    ${device.large} {
        padding: 62px 60px 70px;
    }
    ${pricingStyles}
`;

export const StyledHeader = styled.header`
    margin-bottom: 10px;
    ${device.large} {
        margin-bottom: 19px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: ${themeGet("fontSizes.body")};
    margin-bottom: 20px;
    ${device.large} {
        margin-bottom: 25px;
    }
`;

export const StyledThumb = styled.figure`
    margin-bottom: 30px;
    position: relative;
    text-align: center;
    isolation: isolate;
    ${device.large} {
        margin-bottom: 48px;
    }
    .shape-img {
        position: absolute !important;
        top: 0;
        inset: 0;
        z-index: -1;
        margin: auto;
        margin-bottom: 0;
    }
`;

export const StyledBadge = styled.span`
    position: absolute;
    right: -45px;
    top: 5px;
    text-align: center;
    transform: rotate(45deg);
    padding: 18px 52px;
    background-color: ${themeGet("colors.primary")};
    color: ${themeGet("colors.white")};
    text-transform: uppercase;
    font-size: 14px;
    margin: 0;
`;

export const StyledAmount = styled.h2`
    color: ${themeGet("colors.primary")};
    font-size: 40px;
    ${device.large} {
        font-size: 50px;
    }
    sup {
        font-size: 30px;
        font-weight: 500;
        top: -14px;
        margin-right: 5px;
    }
    span {
        text-transform: capitalize;
        font-size: ${themeGet("fontSizes.body")};
        font-weight: ${themeGet("fontWeights.body")};
    }
`;
export const StyledFeatures = styled.ul`
    margin-bottom: 30px;
    ${device.large} {
        margin-bottom: 50px;
    }
`;

export const StyledItem = styled.li`
    line-height: 1;
    padding: 8px 0;
    ${device.large} {
        padding: 10px 0;
    }
`;
export const StyledFooter = styled.footer`
    max-width: 160px;
    margin: 0 auto;
`;
