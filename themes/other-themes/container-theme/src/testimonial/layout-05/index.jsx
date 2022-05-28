/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, Testimonial02 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection } from "./style";

const settings = {
    autoplay: false,
    slidesPerView: 1,
    pagination: true,
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
};

const TestimonialArea = ({ data }) => (
    <StyledSection className="testimonial-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        mb: ["39px", null, "59px", "80px"],
                    }}
                    {...data.section_title}
                />
            )}
            {data?.items && (
                <SwiperSlider
                    options={settings}
                    navPosition={2}
                    shadowSize="lg"
                >
                    {data.items?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Testimonial02
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
    </StyledSection>
);

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
