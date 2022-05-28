import { graphql } from "gatsby";

export const query = graphql`
    fragment Contact02 on General {
        contact_info {
            country
            state
            address
            email
            phone
        }
        map {
            lat
            lng
        }
        socials {
            id
            icon
            link
            title
        }
    }
`;
