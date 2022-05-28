import styled, { themeGet, device, css } from "@boseo/shared/styled";

export const StyledSearchContent = styled.div`
    bottom: -140px;
    opacity: 0;
    position: absolute;
    right: 0;
    visibility: hidden;
    z-index: 9999;
    transition: ${themeGet("transition")};
    width: 280px;
    ${device.small} {
        width: 300px;
    }

    ${device.large} {
        bottom: -120px;
    }

    ${({ show, isInSticky }) =>
        show &&
        css`
            bottom: -123px;
            opacity: 1;
            visibility: visible;
            ${device.large} {
                bottom: -142px;
            }
            ${isInSticky &&
            css`
                ${device.large} {
                    bottom: -128px;
                }
            `}
        `}
`;
