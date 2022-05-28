/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import {
    // Accordion,
    // AccordionItem,
    // AccordionItemHeading,
    // AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion";
import cn from "clsx";
import loadable from "@loadable/component";
import { ItemType } from "@boseo/helper/types";
// import { StyledAccordion } from "./style";

const StyledAccordion = loadable(() => import("./style"), {
    resolveComponent: (components) => components.StyledAccordion,
});

const Accordion = loadable(() => import("react-accessible-accordion"), {
    resolveComponent: (components) => components.Accordion,
});
const AccordionItem = loadable(() => import("react-accessible-accordion"), {
    resolveComponent: (components) => components.AccordionItem,
});
const AccordionItemPanel = loadable(
    () => import("react-accessible-accordion"),
    {
        resolveComponent: (components) => components.AccordionItemPanel,
    }
);
const AccordionItemHeading = loadable(
    () => import("react-accessible-accordion"),
    {
        resolveComponent: (components) => components.AccordionItemHeading,
    }
);

const AccordionComponent = ({
    className,
    items = [],
    allowZeroExpanded,
    sx,
    space,
    layout,
}) => (
    <StyledAccordion
        className={cn("accordion-wrap", className)}
        sx={sx}
        space={space}
        layout={layout}
    >
        <Accordion
            allowZeroExpanded={allowZeroExpanded}
            preExpanded={[`${items?.[0]?.id}`]}
        >
            {items.map(({ id, title, description }) => (
                <AccordionItem key={id} uuid={`${id}`}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {title} <span className="icon" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{description}</AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </StyledAccordion>
);

AccordionComponent.propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
    allowZeroExpanded: PropTypes.bool,
    space: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
    sx: PropTypes.shape({}),
};

AccordionComponent.defaultProps = {
    allowZeroExpanded: true,
    layout: 1,
};

export default AccordionComponent;
