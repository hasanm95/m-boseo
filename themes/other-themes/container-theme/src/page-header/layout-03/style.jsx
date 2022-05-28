import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    background: ${themeGet("colors.silver")};
    padding-top: 164px;
    padding-bottom: 94px;
    text-align: center;
    position: relative;
    isolation: isolate;
    ${device.medium} {
        padding-top: 184px;
        padding-bottom: 114px;
    }
    ${device.large} {
        padding-top: 254px;
        padding-bottom: 154px;
    }
`;

export const StyledThumb = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    .gatsby-image-wrapper,
    & > img {
        height: 100%;
        width: 100%;
    }
    & > img {
        object-fit: cover;
    }
`;
