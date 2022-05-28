/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType, BlogFormatType } from "@boseo/helper/types";
import {
    Image,
    Anchor,
    ModalVideo,
    SwiperSlider,
    SwiperSlide,
} from "gatsby-theme-ui";
import {
    StyledBlog,
    StyledMedia,
    StyledThumb,
    StyledContent,
    StyledTitle,
    StyledExcerpt,
    StyledBottom,
    StyledAuthor,
    StyledDate,
    StyledShare,
    StyledShareList,
    StyledShareLink,
    StyledVideoBtn,
} from "./style";

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
}) => {
    const [isOpen, setIsOpen] = useState(false);
    let video_arr;
    let video_id;
    let video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        // eslint-disable-next-line prefer-destructuring
        video_id = video_arr[1];
        // eslint-disable-next-line prefer-destructuring
        video_channel = video_link.split(".")[1];
    }
    const onClickHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <StyledBlog className={cn("blog", className)} sx={sx}>
            <StyledMedia className="blog-media">
                {format === "image" && image?.src && (
                    <StyledThumb className="thumb">
                        <Image src={image.src} alt={image.alt || title} />
                        <Anchor className="link-overlay" path={slug}>
                            <span className="sr-only">{title}</span>
                        </Anchor>
                    </StyledThumb>
                )}
                {format === "video" && image?.src && (
                    <Fragment>
                        <StyledThumb className="blog-video">
                            <Image src={image.src} alt={image?.alt || title} />
                            <StyledVideoBtn onClick={onClickHandler}>
                                <i className="fa fa-play" />
                            </StyledVideoBtn>
                        </StyledThumb>
                        <ModalVideo
                            channel={video_channel}
                            isOpen={isOpen}
                            videoId={video_id}
                            onClose={onClickHandler}
                        />
                    </Fragment>
                )}
                {format === "gallery" && gallery_images && (
                    <SwiperSlider
                        options={{
                            slidesPerView: 1,
                        }}
                    >
                        {gallery_images.map((img) => (
                            <SwiperSlide key={img.src.absolutePath}>
                                <StyledThumb className="thumb">
                                    <Image
                                        src={img.src}
                                        alt={img?.alt || title}
                                    />
                                    <Anchor
                                        className="link-overlay"
                                        path={slug}
                                    >
                                        <span className="sr-only">{title}</span>
                                    </Anchor>
                                </StyledThumb>
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                )}
            </StyledMedia>
            <StyledContent className="content">
                <div className="content-top">
                    <StyledTitle className="title">
                        <Anchor path={slug}>{title}</Anchor>
                    </StyledTitle>
                    <StyledExcerpt className="excerpt">{excerpt}</StyledExcerpt>
                </div>
                <StyledBottom>
                    <div className="post-meta">
                        <StyledAuthor className="author">
                            By{" "}
                            {author && (
                                <Anchor className="author" path={author.slug}>
                                    {author.username}
                                </Anchor>
                            )}
                        </StyledAuthor>

                        {date && (
                            <StyledDate className="date">{date}</StyledDate>
                        )}
                    </div>
                    <StyledShare className="share">
                        <i className="fa fa-share-alt" />
                        <StyledShareList className="sharelist">
                            <StyledShareLink
                                href="#!"
                                sx={{ color: "facebook" }}
                            >
                                <i className="fa fa-facebook" />
                            </StyledShareLink>
                            <StyledShareLink
                                href="#!"
                                sx={{ color: "twitter" }}
                            >
                                <i className="fa fa-twitter" />
                            </StyledShareLink>
                            <StyledShareLink
                                href="#!"
                                sx={{ color: "dribbble" }}
                            >
                                <i className="fa fa-dribbble" />
                            </StyledShareLink>
                            <StyledShareLink
                                href="#!"
                                sx={{ color: "pinterest" }}
                            >
                                <i className="fa fa-pinterest" />
                            </StyledShareLink>
                        </StyledShareList>
                    </StyledShare>
                </StyledBottom>
            </StyledContent>
        </StyledBlog>
    );
};

Blog.propTypes = {
    sx: PropTypes.shape({}),
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.shape({
        username: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType),
    excerpt: PropTypes.string,
    format: BlogFormatType,
    video_link: PropTypes.string,
    gallery_images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
};

export default Blog;
