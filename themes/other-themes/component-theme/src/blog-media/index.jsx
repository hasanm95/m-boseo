/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import BlogVideo from "./blog-video";
import BlogThumbnail from "./blog-thumbnail";
import BlogGallery from "./blog-gallery";

const BlogMedia = ({
    className,
    format,
    image,
    title,
    slug,
    video_link,
    gallery_images,
    layout,
    isDetails,
    showVideoBtn,
    sx,
}) => (
    <div className={cn("blog-media", className)} sx={sx}>
        {format === "image" && image?.src && (
            <BlogThumbnail
                image={image}
                title={title}
                slug={slug}
                layout={layout}
                isDetails={isDetails}
            />
        )}
        {format === "video" && (
            <BlogVideo
                title={title}
                video_link={video_link}
                layout={layout}
                image={image}
                showVideoBtn={showVideoBtn}
            />
        )}
        {format === "gallery" && (
            <BlogGallery
                gallery_images={gallery_images}
                isDetails={isDetails}
                title={title}
                slug={slug}
                layout={layout}
            />
        )}
    </div>
);

BlogMedia.propTypes = {
    format: PropTypes.oneOf(["image", "gallery", "video"]),
    image: PropTypes.shape(ImageType),
    video_link: PropTypes.string,
    gallery_images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    title: PropTypes.string,
    slug: PropTypes.string,
    className: PropTypes.string,
    layout: PropTypes.oneOf([1, 2, 3]),
    isDetails: PropTypes.bool,
    showVideoBtn: PropTypes.bool,
    sx: PropTypes.shape({}),
};

BlogMedia.defaultProps = {
    layout: 1,
    isDetails: false,
    showVideoBtn: true,
};

export default BlogMedia;
