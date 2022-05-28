import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 56px;
    position: relative;
    ${device.medium} {
        padding-top: 14px;
        padding-bottom: 76px;
    }
    ${device.large} {
        padding-top: 35px;
        padding-bottom: 128px;
    }
    ${device.xlarge} {
        padding-top: 55px;
        padding-bottom: 275px;
    }
`;

export const StyledThumb = styled.figure`
    position: absolute;

    display: none;
    ${device.large} {
        display: block;
        margin-left: -175px;
    }
    ${device.xlarge} {
        margin-left: -100px;
    }
`;
