import { graphql } from "gatsby";

export const query = graphql`
    fragment Menu01 on General {
        menu {
            id
            text
            link
            submenu {
                id
                link
                text
            }
        }
    }
`;
