import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer01 on General {
        logo {
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
        widgets {
            id
            widget
            title
            texts {
                content
            }
            menu {
                id
                text
                link
            }
        }
        copyright_text
    }
`;
