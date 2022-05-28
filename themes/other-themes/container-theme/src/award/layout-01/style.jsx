import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-bottom: 56px;
    ${device.medium} {
        padding-bottom: 72px;
    }
    ${device.large} {
        padding-bottom: 91px;
    }
    ${device.xlarge} {
        padding-bottom: 111px;
    }
`;

export const StyledContent = styled.div`
    position: relative;
    margin-top: 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
        "item-zero"
        "item-one"
        "item-two";
    place-items: center;
    ${device.small} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "item-zero item-one"
            "item-two .";
    }
    ${device.medium} {
        margin-top: 50px;
        grid-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "item-zero item-one item-two";
    }
    ${device.large} {
        margin-top: 0px;
        grid-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "item-zero item-one"
            ". item-two";
    }
    ${device.xlarge} {
        grid-gap: 40px;
    }
    .item {
        &-0 {
            grid-area: item-zero;
            ${device.large} {
                transform: translateY(calc(50% + 20px));
            }
        }
        &-1 {
            grid-area: item-one;
        }
        &-2 {
            grid-area: item-two;
        }
    }
`;
