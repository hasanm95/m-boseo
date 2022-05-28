/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { Anchor } from "gatsby-theme-ui";
import { ImageType, BlogFormatType } from "@boseo/helper/types";
import BlogMedia from "../../blog-media";
import BlogMeta from "../../blog-meta";
import { StyledBlog, StyledContent, StyledTitle, StyledExcerpt } from "./style";

const Blog = ({
    title,
    slug,
    author,
    date,
    image,
    excerpt,
    format,
    video_link,
    gallery_images,
    className,
    sx,
}) => (
    <StyledBlog className={cn(className, "blog")} sx={sx}>
        <BlogMedia
            format={format}
            image={image}
            title={title}
            slug={slug}
            video_link={video_link}
            gallery_images={gallery_images}
            layout={2}
        />
        <StyledContent>
            <BlogMeta
                sx={{ mb: "10px" }}
                metaList={[
                    {
                        text: "By",
                        title: author?.username,
                        path: author?.slug,
                    },
                    {
                        title: date,
                    },
                ]}
            />
            <StyledTitle>
                <Anchor path={slug}>{title}</Anchor>
            </StyledTitle>
            {excerpt && <StyledExcerpt>{excerpt}</StyledExcerpt>}
        </StyledContent>
    </StyledBlog>
);

Blog.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    author: PropTypes.shape({
        username: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType),
    format: BlogFormatType,
    video_link: PropTypes.string,
    gallery_images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    sx: PropTypes.shape({}),
};
export default Blog;
