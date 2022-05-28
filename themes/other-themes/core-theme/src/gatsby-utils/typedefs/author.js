module.exports = `
type Author implements Node {
    id: ID!
    username: String!
    slug: String!
    avatar: Image
    bio: String!
    socials: [Social]
}
`;
