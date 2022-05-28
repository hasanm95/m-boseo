import { graphql } from "gatsby";

export const query = graphql`
    fragment Site on Site {
        siteMetadata {
            copyright
            siteUrl
        }
    }
`;
