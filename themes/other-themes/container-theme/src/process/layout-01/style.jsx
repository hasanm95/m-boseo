import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledTitle = styled.h3`
    margin-bottom: 15px;
    font-size: 18px;
    ${device.medium} {
        font-size: 22px;
        line-height: 1.5;
        margin-bottom: 20px;
    }
    ${device.large} {
        font-size: 24px;
        margin-bottom: 31px;
    }
`;

export const StyledDesc = styled.p`
    ${device.large} {
        margin-bottom: 35px;
    }
`;

export const StyledItem = styled.li`
    display: flex;
    margin-bottom: 15px;
    ${device.medium} {
        margin-bottom: 20px;
    }
    ${device.large} {
        margin-bottom: 26px;
    }
    i {
        color: ${themeGet("colors.primary")};
        font-size: ${themeGet("fontSizes.body")};
        margin-right: 15px;
        ${device.medium} {
            font-size: 18px;
        }
        ${device.large} {
            margin-right: 22px;
        }
    }
`;
