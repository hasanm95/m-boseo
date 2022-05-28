import { graphql } from "gatsby";

export const query = graphql`
    fragment Item on Item {
        id
        title
        description
        path
        designation
        company
        amount
        period
        popular
        features {
            id
            content
        }
        number
        suffix
        iconClass
        images {
            ...Image
        }
        buttons {
            ...Button
        }
        socials {
            ...Social
        }
    }
`;
