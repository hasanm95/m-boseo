/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Image, Anchor } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import { StyledThumb } from "./style";

const BlogThumbnail = ({ title, slug, layout, isDetails, image }) => (
    <StyledThumb className="blog-thumb" layout={!isDetails && layout}>
        <Image src={image.src} alt={image?.alt || title} />
        {!isDetails && (
            <Anchor className="link-overlay" path={slug}>
                <span className="sr-only">{title}</span>
            </Anchor>
        )}
    </StyledThumb>
);

BlogThumbnail.propTypes = {
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    slug: PropTypes.string,
    layout: PropTypes.oneOf([1, 2, 3]),
    isDetails: PropTypes.bool,
    sx: PropTypes.shape({}),
};

export default BlogThumbnail;
