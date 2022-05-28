import { graphql } from "gatsby";

export const query = graphql`
    fragment Contact01 on General {
        contact_info {
            address
            email
            phone
        }
        socials {
            id
            icon
            link
            title
        }
    }
`;
