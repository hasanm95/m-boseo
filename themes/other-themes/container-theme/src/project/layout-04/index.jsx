/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType, ButtonType } from "@boseo/helper/types";
import { SectionTitle, PortfolioItem02 } from "gatsby-theme-component";
import { Button } from "gatsby-theme-ui";
import { StyledSection, StyledProjects, StyledBottom } from "./style";

const ProjectsArea = ({ data }) => (
    <StyledSection className="projects">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        mb: ["39px", null, "-130px", "-143px"],
                        maxWidth: [null, null, "33.333%", "25%"],
                    }}
                    {...data.section_title}
                />
            )}
            <StyledProjects>
                {data?.items?.map((project, i) => (
                    <PortfolioItem02
                        key={project.id}
                        className={`item-${i}`}
                        title={project.title}
                        slug={project.slug}
                        type={project.type}
                        image={project.image}
                    />
                ))}
            </StyledProjects>
            <StyledBottom>
                {data?.buttons?.map(({ id, path, content, ...rest }) => (
                    <Button key={id} path={path} {...rest}>
                        {content}
                    </Button>
                ))}
            </StyledBottom>
        </div>
    </StyledSection>
);

ProjectsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default ProjectsArea;
