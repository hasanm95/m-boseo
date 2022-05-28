/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, PricingItem01 } from "gatsby-theme-component";
import { Switcher } from "gatsby-theme-ui";
import { StyledSection, StyledPlans, StyledItems } from "./style";

const PricingArea = ({ data }) => {
    const [active, setActive] = useState(false);
    const activeHandler = (isActive) => {
        setActive(isActive);
    };
    let allItems = {};
    const keys = [];

    data?.items.forEach((item) => {
        const newObj = Object.entries(item).reduce((acc, cur) => {
            const [key, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [key]: property,
            };
        }, {});

        const key = newObj.period;
        if (key in allItems) {
            allItems[key].push(newObj);
        } else {
            keys.push(key);
            allItems = {
                ...allItems,
                [key]: [newObj],
            };
        }
    });

    return (
        <StyledSection className="pricing-area">
            <div className="container">
                {data?.section_title && (
                    <SectionTitle
                        sx={{
                            textAlign: "center",
                            mb: ["33px", null, "49px", "68px"],
                        }}
                        {...data.section_title}
                    />
                )}
                <div sx={{ variant: "flex.hrCenter" }}>
                    <Switcher
                        textLeft={keys[0]}
                        textRight={keys[1]}
                        onClick={activeHandler}
                        active={active}
                        sx={{ mb: ["40px", null, "69px", "88px"] }}
                    />
                </div>
                <StyledPlans active={active}>
                    <div className="monthly">
                        <StyledItems>
                            {allItems[keys[0]]?.map((pricing) => (
                                <PricingItem01
                                    key={pricing.id}
                                    sx={{ mb: "30px" }}
                                    title={pricing.title}
                                    amount={pricing.amount}
                                    period={pricing.period}
                                    features={pricing.features}
                                    isPopular={pricing.popular}
                                />
                            ))}
                        </StyledItems>
                    </div>
                    <div className="annualy">
                        <StyledItems>
                            {allItems[keys[1]]?.map((pricing) => (
                                <PricingItem01
                                    key={pricing.id}
                                    sx={{ mb: "30px" }}
                                    title={pricing.title}
                                    amount={pricing.amount}
                                    period={pricing.period}
                                    features={pricing.features}
                                    isPopular={pricing.popular}
                                />
                            ))}
                        </StyledItems>
                    </div>
                </StyledPlans>
            </div>
        </StyledSection>
    );
};

PricingArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PricingArea;
