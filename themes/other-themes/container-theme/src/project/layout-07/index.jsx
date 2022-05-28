/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import {
    SectionTitle,
    PortfolioItem01,
    Pagination,
} from "gatsby-theme-component";
import { StyledSection, StyledBottom } from "./style";

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
            <div className="row gx-8">
                {data?.items?.map((project) => (
                    <div
                        key={project.id}
                        className="col-sm-6 col-md-4 col-xl-3"
                        sx={{ mb: "8px" }}
                    >
                        <PortfolioItem01
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
