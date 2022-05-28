/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitle } from "gatsby-theme-component";
import { Accordion } from "gatsby-theme-ui";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { StyledSection } from "./style";

const FaqArea = ({ data }) => (
    <StyledSection className="faq-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        mb: ["39px", null, "59px", "80px"],
                    }}
                    {...data.section_title}
                />
            )}
            {data?.items && (
                <Accordion space="20px" items={data.items} layout={2} />
            )}
        </div>
    </StyledSection>
);

FaqArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default FaqArea;
