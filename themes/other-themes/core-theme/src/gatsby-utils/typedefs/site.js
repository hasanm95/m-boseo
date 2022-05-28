module.exports = `
type Site implements Node {
    id: ID!
    siteMetadata: SiteMetadata
}
type SiteMetadata {
    title: String
    titleTemplate: String
    description: String
    author: String
    twitterUsername: String
    keywords: [String]
    image: String
    siteUrl: String
    canonical: String
    siteLanguage: String
}
`;
