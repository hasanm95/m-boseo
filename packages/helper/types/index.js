import PropTypes from "prop-types";

const IDType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const HeadingType = {
    id: IDType,
    content: PropTypes.string.isRequired,
    level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
};

export const TextType = {
    id: IDType,
    content: PropTypes.string.isRequired,
};

export const ImageType = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
};

export const SectionTitleType = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export const ButtonComponentType = {
    children: PropTypes.string.isRequired,
    path: PropTypes.string,
    variant: PropTypes.oneOf(["texted", "contained", "outlined", "underlined"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "white",
    ]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
    shape: PropTypes.oneOf(["rounded", "square", "ellipse"]),
    fullwidth: PropTypes.bool,
    iconClass: PropTypes.string,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    iconDistance: PropTypes.string,
    iconSize: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
    disabled: PropTypes.bool,
    sx: PropTypes.shape({}),
};

// eslint-disable-next-line no-unused-vars
const { children, ...restButtonTypes } = ButtonComponentType;

export const ButtonType = {
    content: PropTypes.string.isRequired,
    ...restButtonTypes,
};
export const ItemType = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    company: PropTypes.string,
    designation: PropTypes.string,
    popular: PropTypes.bool,
    link: PropTypes.string,
    amount: PropTypes.number,
    period: PropTypes.oneOf(["monthly", "annualy"]),
    number: PropTypes.number,
    suffix: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    social: PropTypes.shape({}),
};

export const VideoButtonType = {
    content: PropTypes.string.isRequired,
    video_id: PropTypes.string.isRequired,
    video_platform: PropTypes.oneOf(["youtube", "vimeo"]),
};

export const SocialType = {
    id: IDType,
    title: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
};

export const BlogMetaType = {
    title: PropTypes.string,
    slug: PropTypes.string,
};

export const BlogFormatType = PropTypes.oneOf(["image", "gallery", "video"]);

export const AuthorType = {
    id: IDType,
    username: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    avatar: PropTypes.shape(ImageType),
    bio: PropTypes.string,
};

export const BlogType = {
    id: IDType,
    title: PropTypes.string,
    slug: PropTypes.string,
    postedAt: PropTypes.string,
    author: PropTypes.shape(AuthorType),
    excerpt: PropTypes.string,
    format: BlogFormatType,
    image: PropTypes.shape(ImageType),
    category: PropTypes.shape(BlogMetaType),
    tags: PropTypes.arrayOf(PropTypes.shape(BlogMetaType)),
};
