/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, Testimonial04 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection, StyledIcon } from "./style";

const sliderSettings = {
    slidesPerView: 1,
    navigation: true,
    autoplay: false,
};

const TestimonialArea = ({ data }) => (
    <StyledSection className="testimonial-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    {data?.section_title && (
                        <SectionTitle {...data.section_title} />
                    )}
                    <StyledIcon>
                        <i className="fa fa-quote-right" />
                    </StyledIcon>
                </div>
                <div
                    className="col-lg-7"
                    sx={{ pl: ["15px", null, null, "70px", "100px"] }}
                >
                    {data?.items && (
                        <SwiperSlider
                            options={sliderSettings}
                            navStyle={4}
                            navPosition={5}
                        >
                            {data.items?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Testimonial04
                                        name={item.title}
                                        company={item.company}
                                        designation={item.designation}
                                        desc={item.description}
                                    />
                                </SwiperSlide>
                            ))}
                        </SwiperSlider>
                    )}
                </div>
            </div>
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
