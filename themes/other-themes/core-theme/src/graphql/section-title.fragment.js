import { graphql } from "gatsby";

export const query = graphql`
    fragment SectionTitle on SectionTitle {
        title
        subtitle
        description
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        breakpoints: 5
                        formats: WEBP
                        placeholder: TRACED_SVG
                        quality: 100
                    )
                }
            }
            alt
        }
    }
`;
