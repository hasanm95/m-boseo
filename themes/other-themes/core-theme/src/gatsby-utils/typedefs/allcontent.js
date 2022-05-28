module.exports = `
type Heading {
    id: ID!
    content: String!
    level: String
}
type Text {
    id: ID!
    content: String!
}
type SectionTitle {
    id: ID!
    title: String
    subtitle: String
    description: String
    image: Image
}
type VideoButton {
    video_id: String!
    video_platform: String
    content: String
}
type Social {
    id: ID!,
    title: String,
    link: String,
    icon: String,
}
enum ButtonVariant {
    outlined
    texted
    underlined
    contained
}
enum ButtonColor {
    primary
    secondary
    success
    danger
    warning
    info
    light
    dark
    white
}
enum ButtonSize {
    xs
    sm
    md
    lg
}
enum ButtonShape {
    rounded
    square
    ellipse
}

enum IconPosition {
    left
    right
}

type Button {
    id: ID!
    content: String!
    path: String
    variant: ButtonVariant
    color: ButtonColor
    size: ButtonSize
    shape: ButtonShape
    fullwidth: Boolean
    iconClass: String
    iconSize: ButtonSize
    iconPosition: IconPosition
    iconDistance: String
}
enum PricingPeriod {
    monthly
    annualy
}
type Item{
    id: ID!
    title: String
    description: String
    images: [Image]
    buttons: [Button]
    socials: [Social]
    path: String
    designation: String
    company: String
    amount: Int
    period: PricingPeriod
    features: [Text]
    popular: Boolean
    number: Int
    suffix: String
    iconClass: String
}
`;
