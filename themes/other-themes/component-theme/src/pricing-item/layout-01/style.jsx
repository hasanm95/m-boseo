import styled, { themeGet, css, device } from "@boseo/shared/styled";

const pricingStyles = ({ theme, isPopular }) => css`
    ${isPopular &&
    css`
        ${device.medium} {
            background-color: ${theme.colors.white};
            padding: 39px 15px 55px;
            transform: translateY(-19px);
            width: 35.041334%;
            box-shadow: ${theme.shadows.default};
        }
        ${device.large} {
            padding: 61px 75px 87px;
        }
    `}
`;

export const StyledPricing = styled.div`
    padding: 32px 15px 55px;
    text-align: center;
    width: 100%;
    box-shadow: ${themeGet("shadows.gray50")};
    ${device.medium} {
        width: 32.479333%;
        margin-bottom: -38px;
        box-shadow: none;
    }
    ${device.large} {
        padding: 62px 60px 70px;
    }
    ${pricingStyles}
`;

export const StyledHeader = styled.div`
    display: inline-block;
    margin-bottom: 20px;
    ${device.large} {
        margin-bottom: 25px;
    }
    ${({ isPopular }) =>
        isPopular &&
        css`
            margin-bottom: 30px;
            ${device.large} {
                margin-bottom: 37px;
            }
        `}
`;

export const StyledTitle = styled.h3`
    align-items: center;
    display: flex;
    font-size: ${themeGet("fontSizes.body")};
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 16px;
`;

export const StyledBadge = styled.span`
    background-color: ${themeGet("colors.success")};
    border-radius: 5px;
    color: ${themeGet("colors.white")};
    font-size: 12px;
    display: inline-block;
    padding: 8px 18px;
    margin-left: 10px;
`;

export const StyledAmount = styled.h2`
    color: ${themeGet("colors.primary")};
    font-size: 40px;
    margin-bottom: 20px;
    ${device.large} {
        font-size: 50px;
        margin-bottom: 30px;
    }
    sup {
        font-size: 30px;
        font-weight: 500;
        top: -14px;
        margin-right: 5px;
    }
    span {
        font-family: ${themeGet("fonts.body")};
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 400;
    }
`;

export const StyledFeatures = styled.ul`
    margin-bottom: 22px;
    ${device.large} {
        margin-bottom: 42px;
    }
`;

export const StyledItem = styled.li`
    border-top: 1px solid ${themeGet("colors.border")};
    padding: 12px 0;
    ${device.large} {
        padding: 14px 0;
    }
`;
