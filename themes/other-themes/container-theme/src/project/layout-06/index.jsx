/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import {
    SectionTitle,
    PortfolioItem04,
    Pagination,
} from "gatsby-theme-component";
import { StyledSection, StyledBottom } from "./style";

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
            <div className="row">
                {data?.items?.map((project) => (
                    <div
                        key={project.id}
                        className="col-sm-6 col-lg-4"
                        sx={{ mb: "40px" }}
                    >
                        <PortfolioItem04
                            title={project.title}
                            slug={project.slug}
                            type={project.type}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>
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
