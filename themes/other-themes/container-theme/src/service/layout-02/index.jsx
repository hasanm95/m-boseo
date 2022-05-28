/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { IconBox02, SectionTitle } from "gatsby-theme-component";
import { StyledSection } from "./style";

const ServicesArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{ mb: ["33px", null, "49px", "68px"] }}
                    {...data.section_title}
                />
            )}

            <div className="row">
                {data?.items?.map((item) => (
                    <div
                        className="col-md-6 col-lg-4"
                        key={item.id}
                        sx={{ mb: "30px" }}
                    >
                        <IconBox02
                            title={item.title}
                            desc={item.description}
                            image={item.images?.[0]}
                            path={item.path}
                        />
                    </div>
                ))}
            </div>
        </div>
    </StyledSection>
);

ServicesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ServicesArea;
