/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, IconBox05 } from "gatsby-theme-component";
import { StyledSection } from "./style";

const FeatureArea = ({ data }) => (
    <StyledSection className="feature-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{ mb: ["39px", null, "60px", "80px"] }}
                    {...data.section_title}
                />
            )}

            {data?.items && (
                <div className="row">
                    {data.items?.map((item) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={item.id}
                            sx={{ mb: "30px" }}
                        >
                            <IconBox05
                                title={item.title}
                                image={item.images?.[0]}
                                desc={item.description}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    </StyledSection>
);

FeatureArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default FeatureArea;
