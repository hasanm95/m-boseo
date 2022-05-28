/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, PortfolioItem01 } from "gatsby-theme-component";
import { StyledSection } from "./style";

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
            <div className="row gx-30 gx-lg-50">
                {data?.items?.map((project) => (
                    <div
                        key={project.id}
                        className="col-sm-6"
                        sx={{ mb: ["30px", null, null, "50px"] }}
                    >
                        <PortfolioItem01
                            title={project.title}
                            slug={project.slug}
                            type={project.type}
                            image={project?.image}
                        />
                    </div>
                ))}
            </div>
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
