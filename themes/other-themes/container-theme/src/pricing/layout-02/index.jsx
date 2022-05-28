/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, PricingItem02 } from "gatsby-theme-component";
import { StyledSection, StyledItems } from "./style";

const PricingArea = ({ data }) => (
    <StyledSection className="pricing-area">
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        mb: ["33px", null, "69px", "89px"],
                    }}
                    {...data.section_title}
                />
            )}
            {data?.items && (
                <StyledItems>
                    {data.items?.map((pricing) => (
                        <PricingItem02
                            sx={{ mb: "30px" }}
                            key={pricing.id}
                            title={pricing.title}
                            image={pricing.images?.[0]}
                            amount={pricing.amount}
                            period={pricing.period}
                            features={pricing.features}
                            isPopular={pricing.popular}
                        />
                    ))}
                </StyledItems>
            )}
        </div>
    </StyledSection>
);

PricingArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PricingArea;
