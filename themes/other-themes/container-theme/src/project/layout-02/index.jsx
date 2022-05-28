/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, PortfolioItem02 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection } from "./style";

const sliderSettings = {
    slidesPerView: 1,
    autoplay: false,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
};

const ProjectsArea = ({ data }) => (
    <StyledSection className="projects">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        mb: ["39px", null, "60px", "80px"],
                    }}
                    {...data.section_title}
                />
            )}
        </div>
        <div className="container-fluid">
            {data?.items && (
                <SwiperSlider
                    options={sliderSettings}
                    navStyle={3}
                    navPosition={3}
                >
                    {data.items?.map((project) => (
                        <SwiperSlide key={project.id}>
                            <PortfolioItem02
                                title={project.title}
                                slug={project.slug}
                                type={project.type}
                                image={project.image}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
        </div>
    </StyledSection>
);

ProjectsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ProjectsArea;
