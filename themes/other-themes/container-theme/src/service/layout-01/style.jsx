import styled, { device, css } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    ${({ spacing }) =>
        spacing === 1 &&
        css`
            padding: 31px 0;
            ${device.medium} {
                padding: 51px 0;
            }
            ${device.large} {
                padding: 100px 0 70px;
            }
            ${device.xlarge} {
                padding: 120px 0 90px;
            }
        `}
    ${({ spacing }) =>
        spacing === 2 &&
        css`
            padding: 31px 0;
            ${device.medium} {
                padding-top: 47px;
                padding-bottom: 51px;
            }
            ${device.large} {
                padding: 100px 0 70px;
            }
            ${device.xlarge} {
                padding: 120px 0 90px;
            }
        `}
`;
