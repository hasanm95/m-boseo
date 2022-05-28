/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, Testimonial03 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection, StyledShape } from "./style";

const settings = {
    autoplay: false,
    slidesPerView: 1,
    navigation: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 50,
        },
    },
};

const TestimonialArea = ({ data }) => (
    <StyledSection className="testimonial-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        mb: ["39px", null, "59px", "80px"],
                    }}
                    {...data.section_title}
                />
            )}
        </div>
        <div className="testimonial-wrapper">
            {data?.items && (
                <SwiperSlider
                    options={settings}
                    navPosition={3}
                    navStyle={4}
                    shadowSize="md"
                >
                    {data.items?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Testimonial03
                                name={item.title}
                                designation={item.designation}
                                company={item.company}
                                desc={item.description}
                                image={item.images?.[0]}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
        </div>
        <StyledShape>
            <StaticImage
                src="../../images/shape/bg-shape-02.png"
                alt="Boseo-HasTech"
            />
        </StyledShape>
    </StyledSection>
);

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
