/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import {
    SectionTitle,
    PortfolioItem05,
    Pagination,
} from "gatsby-theme-component";
import Masonry from "react-masonry-css";
import { StyledSection, StyledBottom } from "./style";

const breakpointColumnsObj = {
    default: 4,
    1399: 3,
    992: 2,
    600: 1,
};

const ProjectsArea = ({ data }) => (
    <StyledSection className="projects">
        <div className="container-fluid">
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
                    <PortfolioItem05
                        key={project.id}
                        sx={{ mb: "45px" }}
                        title={project.title}
                        slug={project.slug}
                        type={project.type}
                        image={project.image}
                        excerpt={project.excerpt}
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
