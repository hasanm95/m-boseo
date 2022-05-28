import { graphql } from "gatsby";

export const query = graphql`
    fragment Article03 on Article {
        id
        title
        slug
        format
        date(formatString: "LL")
        category {
            title
            slug
        }
        tags {
            title
            slug
        }
        author {
            username
            slug
        }
        content
        video_link
        image {
            src {
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
        gallery_images {
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
    }
`;
