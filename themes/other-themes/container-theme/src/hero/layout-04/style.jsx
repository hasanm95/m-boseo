import styled, { device, themeGet } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    .swiper-btn {
        visibility: hidden;
        opacity: 0;
    }

    &:hover {
        .swiper-btn {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const StyledSlide = styled.div`
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    ${device.medium} {
        min-height: 600px;
    }
    ${device.large} {
        height: calc(100vh - 160px);
        min-height: 670px;
    }
`;

export const StyledBg = styled.div`
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

export const StyledTitle = styled.h1`
    color: ${themeGet("colors.white")};
    font-size: clamp(30px, 4.9vw, 60px);
    span {
        font-weight: 400;
    }
`;

export const StyledBtnWrap = styled.div`
    margin-top: 30px;
    ${device.medium} {
        margin-top: 40px;
    }
    ${device.large} {
        margin-top: 62px;
    }
    a,
    button {
        &:first-of-type {
            margin-right: 20px;
            margin-bottom: 10px;
            ${device.small} {
                margin-bottom: 0;
            }
        }
    }
`;
