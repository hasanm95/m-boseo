import styled, { device } from "@boseo/shared/styled";

export const StyledSection = styled.section`
    padding-top: 0;
    padding-bottom: 60px;
    ${device.medium} {
        padding-top: 7px;
        padding-bottom: 80px;
    }
    ${device.large} {
        padding-top: 16px;
        padding-bottom: 100px;
    }
    ${device.xlarge} {
        padding-top: 36px;
        padding-bottom: 120px;
    }
    .container-fluid {
        padding-left: 50px;
        padding-right: 50px;
    }
    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -50px; /* gutter size offset */
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 50px; /* gutter size */
        background-clip: padding-box;
    }
`;

export const StyledBottom = styled.div`
    text-align: center;
`;
