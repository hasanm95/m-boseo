/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, Testimonial01 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection } from "./style";

const TestimonialArea = ({ data }) => (
    <StyledSection className="testimonial-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        mb: ["36px", null, "41px", "61px"],
                    }}
                    {...data.section_title}
                />
            )}
            <SwiperSlider
                options={{
                    autoplay: false,
                    slidesPerView: 1,
                    navigation: true,
                }}
                navPosition={2}
            >
                {data?.items?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Testimonial01
                            name={item.title}
                            designation={item.designation}
                            company={item.company}
                            desc={item.description}
                            image={item.images?.[0]}
                        />
                    </SwiperSlide>
                ))}
            </SwiperSlider>
        </div>
        <StaticImage
            src="../../images/bg/bg-01.png"
            alt="testimonial"
            layout="fullWidth"
            className="bg"
            quality="100"
        />
    </StyledSection>
);

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
