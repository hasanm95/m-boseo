/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, BlogType } from "@boseo/helper/types";
import { SectionTitle, Blog02 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection } from "./style";

const sliderOptions = {
    slidesPerView: 1,
    autoplay: false,
    navigation: true,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

const BlogArea = ({ data }) => (
    <StyledSection className="blog-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{ mb: ["33px", null, "49px", "70px"] }}
                    {...data?.section_title}
                />
            )}
            {data?.blogs && (
                <SwiperSlider
                    options={sliderOptions}
                    navStyle={4}
                    shadowSize="lg"
                >
                    {data.blogs?.map((post) => (
                        <SwiperSlide key={post.id}>
                            <Blog02
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                slug={post.slug}
                                excerpt={post.excerpt}
                                image={post?.image}
                                format={post.format}
                                video_link={post.video_link}
                                gallery_images={post.gallery_images}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
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
