import { graphql } from "gatsby";

export const query = graphql`
    fragment Article02 on Article {
        id
        title
        slug
        format
        date(formatString: "LL")
        author {
            username
            slug
        }
        excerpt
        video_link
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: TRACED_SVG
                        quality: 100
                        outputPixelDensities: [0.5, 1, 2]
                        width: 365
                        height: 255
                    )
                }
            }
            alt
        }
        gallery_images {
            src {
                absolutePath
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: TRACED_SVG
                        quality: 100
                        outputPixelDensities: [0.5, 1, 2]
                        width: 365
                        height: 255
                    )
                }
            }
            alt
        }
    }
`;
