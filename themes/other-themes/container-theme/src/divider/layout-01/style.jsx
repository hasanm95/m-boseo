import styled, { css, device, themeGet } from "@boseo/shared/styled";
import { shapeMoveThree } from "@boseo/shared/animations";

export const StyledContent = styled.div`
    background-color: ${themeGet("colors.gray950")};
    padding: 95px 0 100px;
    position: relative;
    text-align: center;
    z-index: 1;
    ${device.medium} {
        padding: 95px 0 170px;
    }
    ${device.large} {
        padding: 118px 0 180px;
    }
`;

export const StyledContentInner = styled.div`
    margin: 0 auto;
    max-width: 704px;
    padding: 0 15px;
    ${device.medium} {
        padding: 0;
    }
`;

export const StyledTitle = styled.h2`
    margin-bottom: 25px;
    ${device.medium} {
        font-size: 40px;
        margin-bottom: 38px;
    }
    ${device.large} {
        font-size: 50px;
    }
`;

export const StyledDesc = styled.p`
    font-size: 18px;
    margin-bottom: 37px;
    ${device.medium} {
        margin-bottom: 47px;
    }
    ${device.medium} {
        margin-bottom: 67px;
    }
`;

export const StyledShape = styled.div`
    position: absolute;
    z-index: -1;
    ${({ layout }) =>
        layout === 1 &&
        css`
            bottom: 0;
            display: none;
            left: 16%;
            width: 150px;
            ${device.medium} {
                display: block;
            }
            ${device.large} {
                left: 16%;
                width: auto;
            }
            ${device.xlarge} {
                left: 231px;
            }
        `}
    ${({ layout }) =>
        layout === 2 &&
        css`
            bottom: 0;
            right: 16%;
            width: 150px;
            display: none;
            ${device.medium} {
                display: block;
            }
            ${device.large} {
                right: 16%;
                width: auto;
            }
            ${device.large} {
                right: 182px;
            }
        `}
    ${({ layout }) =>
        layout === 3 &&
        css`
            bottom: 0;
            left: 3.4%;
            width: 70px;
            ${device.large} {
                width: 80px;
            }
            ${device.xlarge} {
                width: auto;
            }
        `}
    ${({ layout }) =>
        layout === 4 &&
        css`
            top: 39%;
            left: 6.8%;
            animation: ${shapeMoveThree} linear infinite 4s;
            ${device.medium} {
                display: block;
            }
        `}
    ${({ layout }) =>
        layout === 5 &&
        css`
            top: 39%;
            right: 19.2%;
            animation: ${shapeMoveThree} linear infinite 3s;
            ${device.medium} {
                display: block;
            }
        `}
`;
