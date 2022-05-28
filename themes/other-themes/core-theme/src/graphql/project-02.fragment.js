import { graphql } from "gatsby";

export const query = graphql`
    fragment Project02 on Project {
        id
        title
        slug
        type
        excerpt
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        outputPixelDensities: [0.5, 1, 2]
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
