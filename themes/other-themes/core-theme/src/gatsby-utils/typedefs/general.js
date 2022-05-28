module.exports = `
type General implements Node{
    id: ID!
    section: String!
    menu: [Menu]
    logo: [Image]
    enable_search: Boolean
    button: Button
    contact_info: ContactInfo
    socials: [Social]
    widgets: [Widget]
    map: Map
    copyright_text: String
}
type Menu {
    id: ID!
    text: String
    link: String
    submenu: [Submenu]
}
type Submenu {
    id: ID!
    text: String
    link: String
}
type ContactInfo {
    country: String
    state: String
    street: String
    address: String
    email: String
    phone: String
}
type Widget {
    id: ID!
    widget: String!
    title: String
    texts: [Text]
    menu: [Submenu]
}
type Map {
    lat: Float
    lng: Float
}
`;
