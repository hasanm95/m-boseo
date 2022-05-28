import React from "react";
import PropTypes from "prop-types";
import { SectionTitle, TeamMember } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { StyledSection } from "./style";

const settings = {
    autoplay: false,
    slidesPerView: 1,
    navigation: true,
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
};

const TeamArea = ({ data }) => (
    <StyledSection className="team-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{ mb: ["33px", null, "49px", "68px"] }}
                    {...data.section_title}
                />
            )}

            {data?.items && (
                <SwiperSlider
                    options={settings}
                    navStyle={6}
                    navPosition={1}
                    shadowSize="lg"
                >
                    {data.items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TeamMember
                                title={item.title}
                                designation={item.designation}
                                description={item.description}
                                image={item.images?.[0]}
                                socials={item.socials}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
        </div>
    </StyledSection>
);

TeamArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TeamArea;
