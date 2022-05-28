import styled, { themeGet, device } from "@boseo/shared/styled";

export const StyledBox = styled.div`
    background-color: ${themeGet("colors.white")};
    box-shadow: ${themeGet("shadows.gray50lg")};
    border-radius: 5px;
    padding: 49px 35px 39px;
    position: relative;
    z-index: 0;
`;

export const StyledImg = styled.div`
    margin-bottom: 26px;
    position: relative;
`;

export const StyledTitle = styled.h3`
    margin-bottom: 25px;
    font-size: 18px;
    ${device.large} {
        font-size: 20px;
    }

    a {
        color: ${themeGet("colors.heading")};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;
