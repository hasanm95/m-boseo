import { graphql } from "gatsby";

export const query = graphql`
    fragment ArticleDetails on Article {
        title
        video_link
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
        content
        author {
            username
            slug
            bio
            socials {
                id
                icon
                link
                title
            }
            avatar {
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
        }
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
