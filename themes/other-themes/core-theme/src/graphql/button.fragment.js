import { graphql } from "gatsby";

export const query = graphql`
    fragment Button on Button {
        id
        path
        content
        color
        variant
        size
        shape
        iconClass
        iconSize
        iconPosition
        iconDistance
    }
`;
