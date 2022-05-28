import { graphql } from "gatsby";

export const query = graphql`
    fragment Project01 on Project {
        id
        title
        slug
        type
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
