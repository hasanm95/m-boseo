import { graphql } from "gatsby";

export const query = graphql`
    fragment PageContent on PageContent {
        section
        show_form
        pageName
        texts {
            ...Text
        }
        headings {
            ...Heading
        }
        images {
            ...Image
        }
        section_title {
            ...SectionTitle
        }
        buttons {
            ...Button
        }
        video_button {
            ...VideoButton
        }
        items {
            ...Item
        }
    }
`;
