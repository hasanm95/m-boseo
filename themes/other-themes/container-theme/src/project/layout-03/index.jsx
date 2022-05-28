/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, PortfolioItem03 } from "gatsby-theme-component";
import { SwiperSlider, SwiperSlide } from "gatsby-theme-ui";
import { StyledSection, StyledShpae } from "./style";

const sliderSettings = {
    slidesPerView: 1,
    autoplay: false,
    navigation: true,
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: true,
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
        <div className="project-wrapper">
            {data?.items && (
                <SwiperSlider
                    options={sliderSettings}
                    navStyle={4}
                    navPosition={3}
                >
                    {data.items?.map((project) => (
                        <SwiperSlide key={project.id}>
                            <PortfolioItem03
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
        <StyledShpae>
            <StaticImage
                src="../../images/shape/bg-shape-07.png"
                alt="Project Shape"
            />
        </StyledShpae>
    </StyledSection>
);

ProjectsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ProjectsArea;
