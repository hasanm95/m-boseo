import { graphql } from "gatsby";

export const query = graphql`
    fragment Image on Image {
        src {
            absolutePath
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: TRACED_SVG
                    quality: 100
                    outputPixelDensities: [0.5, 1, 2]
                )
            }
        }
        alt
    }
`;
