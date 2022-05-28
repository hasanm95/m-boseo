/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, BlogType } from "@boseo/helper/types";
import { SectionTitle, Blog01 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide, HRLine } from "gatsby-theme-ui";
import { StyledSection } from "./style";

const sliderOptions = {
    slidesPerView: 1,
    autoplay: false,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
};

const BlogArea = ({ data }) => (
    <StyledSection className="blog-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{ mb: ["40px", null, "60px", "80px"] }}
                    {...data.section_title}
                />
            )}
            {data?.blogs && (
                <SwiperSlider options={sliderOptions} navStyle={2}>
                    {data.blogs?.map((post) => (
                        <SwiperSlide key={post.id}>
                            <Blog01
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                slug={post.slug}
                                image={post?.image}
                                format={post.format}
                                video_link={post.video_link}
                                gallery_images={post.gallery_images}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
            <HRLine sx={{ mt: ["57px", null, "77px", "96px", "112px"] }} />
        </div>
    </StyledSection>
);

BlogArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        blogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

export default BlogArea;
