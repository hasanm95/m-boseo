import { graphql } from "gatsby";

export const query = graphql`
    fragment VideoButton on VideoButton {
        video_id
        video_platform
        content
    }
`;
