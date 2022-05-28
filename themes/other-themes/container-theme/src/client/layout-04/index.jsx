/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType } from "@boseo/helper/types";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { BrandLogo } from "gatsby-theme-component";
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
        <h2 className="sr-only">Client Logos</h2>
        <div className="container">
            <SwiperSlider options={sliderOptions}>
                {data?.items?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <BrandLogo
                            image={item.images?.[0]}
                            title={item.title}
                        />
                    </SwiperSlide>
                ))}
            </SwiperSlider>
        </div>
    </StyledSection>
);

BrandLogoArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default BrandLogoArea;
