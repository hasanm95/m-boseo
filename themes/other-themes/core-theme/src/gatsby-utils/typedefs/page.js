module.exports = `
type Page implements Node {
    id: ID!
    title: String!
    content: [PageContent]
}
type PageContent {
    section: String!
    show_form: Boolean
    pageName: String
    headings: [Heading]
    texts: [Text]
    items: [Item]
    section_title: SectionTitle
    images: [Image]
    buttons: [Button]
    video_button: VideoButton
}
`;
