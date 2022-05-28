import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 10px;
    ${device.medium} {
        padding-top: 20px;
    }
    ${device.large} {
        padding-top: 30px;
    }
    ${device.xxlarge} {
        padding-top: 75px;
    }
`;

export const StyledThumb = styled.figure`
    margin-top: 50px;
    ${device.large} {
        margin-top: 100px;
    }
`;
