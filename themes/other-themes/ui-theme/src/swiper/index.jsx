/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledWrap, createStyles } from "./style";
import "./swiper.css";

const SwiperSlider = ({
    options,
    prevIcon,
    nextIcon,
    navStyle,
    navPosition,
    shadowSize,
    dotStyle,
    dotPosition,
    children,
    className,
    sx,
}) => {
    const date = new Date().getTime();
    const prevClass = `prev-${date}`;
    const nextClass = `next-${date}`;

    const sliderOptions = {
        modules: [Navigation, Pagination, A11y, Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        ...options,
        navigation: options?.navigation
            ? {
                  prevEl: `.${prevClass}`,
                  nextEl: `.${nextClass}`,
              }
            : false,
        pagination: options?.pagination ? { clickable: true } : false,
    };

    const sliderProps = {
        css: (theme) =>
            createStyles(
                theme,
                navStyle,
                navPosition,
                shadowSize,
                dotStyle,
                dotPosition
            ),
    };

    return (
        <StyledWrap
            className={cn(className, "swiper-wrap")}
            sx={sx}
            {...sliderProps}
        >
            <Swiper {...sliderOptions}>{children}</Swiper>
            {sliderOptions.navigation && (
                <Fragment>
                    <button
                        type="button"
                        className={`swiper-btn swiper-btn-prev ${prevClass}`}
                    >
                        <i className={prevIcon} />
                    </button>
                    <button
                        type="button"
                        className={`swiper-btn swiper-btn-next ${nextClass}`}
                    >
                        <i className={nextIcon} />
                    </button>
                </Fragment>
            )}
        </StyledWrap>
    );
};

export { SwiperSlide };

SwiperSlider.propTypes = {
    options: PropTypes.shape({
        navigation: PropTypes.bool,
        pagination: PropTypes.bool,
        loop: PropTypes.bool,
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    navStyle: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    navPosition: PropTypes.oneOf([1, 2, 3, 4, 5]),
    shadowSize: PropTypes.oneOf(["md", "lg"]),
    dotStyle: PropTypes.oneOf([1, 2, 3]),
    dotPosition: PropTypes.oneOf([1, 2, 3]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

SwiperSlider.defaultProps = {
    prevIcon: "lnr lnr-arrow-left",
    nextIcon: "lnr lnr-arrow-right",
    navStyle: 1,
    navPosition: 1,
    dotStyle: 1,
    dotPosition: 1,
};

export default SwiperSlider;
