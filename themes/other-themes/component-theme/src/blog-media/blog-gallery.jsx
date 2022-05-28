/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Image, Anchor, SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import { StyledThumb } from "./style";

const sliderOptions = {
    slidesPerView: 1,
    autoplay: true,
};

const BlogGallery = ({
    title,
    slug,
    layout,
    isDetails,
    gallery_images,
    sx,
}) => (
    <SwiperSlider options={sliderOptions}>
        {gallery_images.map((img) => (
            <SwiperSlide key={img.src?.absolutePath}>
                <StyledThumb
                    className="blog-thumb"
                    layout={!isDetails && layout}
                    sx={sx}
                >
                    <Image src={img.src} alt={img?.alt || title} />
                    {!isDetails && (
                        <Anchor className="link-overlay" path={slug}>
                            <span className="sr-only">{title}</span>
                        </Anchor>
                    )}
                </StyledThumb>
            </SwiperSlide>
        ))}
    </SwiperSlider>
);

BlogGallery.propTypes = {
    gallery_images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    title: PropTypes.string,
    slug: PropTypes.string,
    layout: PropTypes.oneOf([1, 2, 3]),
    isDetails: PropTypes.bool,
    sx: PropTypes.shape({}),
};

export default BlogGallery;
