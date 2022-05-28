import React from "react";
import PropTypes from "prop-types";
import { SwiperSlider, SwiperSlide, Image, Button } from "gatsby-theme-ui";
import { ItemType } from "@boseo/helper/types";
import {
    StyledSection,
    StyledSlide,
    StyledBg,
    StyledTitle,
    StyledBtnWrap,
} from "./style";

const settings = {
    slidesPerView: 1,
    autoplay: false,
    navigation: true,
};

const HeroArea = ({ data }) => (
    <StyledSection>
        {data?.items && (
            <SwiperSlider options={settings} navPosition={4} navStyle={5}>
                {data.items?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <StyledSlide>
                            {item.images?.[0].src && (
                                <StyledBg>
                                    <Image
                                        src={item.images[0].src}
                                        alt={item.images[0]?.alt || item.title}
                                    />
                                </StyledBg>
                            )}
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <StyledTitle
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        />
                                        {item?.buttons && (
                                            <StyledBtnWrap>
                                                {item.buttons?.map((btn) => (
                                                    <Button
                                                        key={btn.id}
                                                        {...btn}
                                                    >
                                                        {btn.content}
                                                    </Button>
                                                ))}
                                            </StyledBtnWrap>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </StyledSlide>
                    </SwiperSlide>
                ))}
            </SwiperSlider>
        )}
    </StyledSection>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default HeroArea;
