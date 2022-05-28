module.exports = `
type Article implements Node{
    id: ID!
    title: String!
    slug: String!
    date: Date! @dateformat
    image: Image
    gallery_images: [Image]
    video_link: String
    category: Meta!
    tags: [Meta]!
    format: Format!
    excerpt: String!
    is_featured: Boolean
    author: Author @link(from: "author", by: "username")
    content: String!
}
type Meta {
    title: String!
    slug: String!
}
enum Format {
    gallery
    image
    video
}
`;
// quote_text: String
// quote_author: String

// enum Format {
//     gallery
//     image
//     video
//     quote
// }
