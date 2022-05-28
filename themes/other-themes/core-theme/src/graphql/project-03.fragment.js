import { graphql } from "gatsby";

export const query = graphql`
    fragment Project03 on Project {
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
                        width: 585
                        height: 550
                    )
                }
            }
            alt
        }
    }
`;
