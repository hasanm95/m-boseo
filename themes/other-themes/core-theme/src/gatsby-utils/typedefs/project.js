module.exports = `
type Project implements Node {
    id: ID!
    title: String!
    slug: String!
    type: String!
    image: Image!
    excerpt: String
    client: String
    website: String
    budget: String
    location: String
    overview: [Text]
    content: [PageContent]
}
`;
