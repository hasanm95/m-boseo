/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType, SectionTitleType } from "@boseo/helper/types";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { BrandLogo, SectionTitle } from "gatsby-theme-component";
import { StyledSection } from "./style";

const sliderOptions = {
    slidesPerView: 2,
    navigation: false,
    breakpoints: {
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    },
};

const BrandLogoArea = ({ data }) => (
    <StyledSection className="brand-logo-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        mb: ["33px", null, "43px", "53px"],
                    }}
                    {...data.section_title}
                />
            )}
            {data?.items && (
                <SwiperSlider options={sliderOptions}>
                    {data.items?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BrandLogo
                                image={item.images?.[0]}
                                title={item.title}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
        </div>
    </StyledSection>
);

BrandLogoArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default BrandLogoArea;
