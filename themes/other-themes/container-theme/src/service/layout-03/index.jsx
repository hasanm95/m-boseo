/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitleType, ItemType } from "@boseo/shared";
import { IconBox04, SectionTitle } from "gatsby-theme-component";
import { StyledSection, StyledShpae } from "./style";

const ServicesArea = ({ data }) => (
    <StyledSection className="services">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{ mb: ["33px", null, "49px", "68px"] }}
                    title={data.section_title?.title}
                    subtitle={data.section_title?.subtitle}
                    description={data.section_title?.description}
                />
            )}
            <h2 className="sr-only">Service Section</h2>

            <div className="row gx-20 gx-md-40">
                {data?.items?.map((item, i) => {
                    let styles;
                    if (i === 1 || i === 4) {
                        styles = { mt: [null, null, null, "-40px"] };
                    }
                    return (
                        <div
                            className="col-sm-6 col-lg-4"
                            key={item.id}
                            sx={{ mb: ["20px", null, "40px"], ...styles }}
                        >
                            <IconBox04
                                title={item.title}
                                desc={item.description}
                                image={item.images?.[0]}
                                path={item.path}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        <StyledShpae>
            <StaticImage
                src="../../images/shape/bg-shape-06.png"
                alt="Service Shape"
            />
        </StyledShpae>
    </StyledSection>
);

ServicesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ServicesArea;
