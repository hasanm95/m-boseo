import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 56px;
    ${device.medium} {
        padding-top: 78px;
    }
    ${device.large} {
        padding-top: 92px;
    }
    ${device.xlarge} {
        padding-top: 118px;
        padding-bottom: 162px;
    }
`;

export const StyledProjects = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
        "item-zero"
        "item-one"
        "item-two";
    place-items: center;

    ${device.medium} {
        grid-gap: 0;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "item-zero item-one"
            ". item-two";
    }
    .item {
        &-0 {
            grid-area: item-zero;
            ${device.medium} {
                img {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                .info {
                    border-bottom-right-radius: 0;
                }
                transform: translateY(50%);
            }
        }
        &-1 {
            grid-area: item-one;
            ${device.medium} {
                img,
                .info {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }
        &-2 {
            grid-area: item-two;
            ${device.medium} {
                img {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }
            }
        }
    }
`;

export const StyledBottom = styled.div`
    margin-top: 30px;
    ${device.medium} {
        margin-top: -85px;
    }
    ${device.large} {
        margin-top: -128px;
    }
    ${device.xlarge} {
        margin-top: -142px;
    }
`;
