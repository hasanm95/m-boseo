import { graphql } from "gatsby";

export const query = graphql`
    fragment ProjectDetails on Project {
        id
        title
        slug
        type
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
        website
        client
        budget
        location
        overview {
            content
        }
        content {
            section
            texts {
                id
                content
            }
            section_title {
                title
                subtitle
            }
            images {
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
            items {
                id
                title
                designation
                company
                description
                images {
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
        }
    }
`;
