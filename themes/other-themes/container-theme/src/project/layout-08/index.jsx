/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import {
    SectionTitle,
    PortfolioItem04,
    Pagination,
} from "gatsby-theme-component";
import Masonry from "react-masonry-css";
import { StyledSection, StyledBottom } from "./style";

const breakpointColumnsObj = {
    default: 3,
    992: 2,
    480: 1,
};

const ProjectsArea = ({ data }) => (
    <StyledSection className="projects">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: ["center", null, null, "left"],
                        mb: ["40px", null, "60px", "80px"],
                    }}
                    {...data.section_title}
                />
            )}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data?.items?.map((project) => (
                    <PortfolioItem04
                        key={project.id}
                        sx={{ mb: ["30px", null, null, "40px"] }}
                        title={project.title}
                        slug={project.slug}
                        type={project.type}
                        image={project.image}
                    />
                ))}
            </Masonry>
            {data?.pagination && data.pagination?.numberOfPages > 1 && (
                <StyledBottom>
                    <Pagination {...data.pagination} />
                </StyledBottom>
            )}
        </div>
    </StyledSection>
);

ProjectsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        pagination: PropTypes.shape({
            rootPage: PropTypes.string,
            numberOfPages: PropTypes.number,
            currentPage: PropTypes.number,
        }),
    }),
};

export default ProjectsArea;
