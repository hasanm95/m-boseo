/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { Button } from "gatsby-theme-ui";
import { TextType } from "@boseo/helper/types";
import {
    StyledPricing,
    StyledHeader,
    StyledTitle,
    StyledBadge,
    StyledAmount,
    StyledFeatures,
    StyledItem,
} from "./style";

const PricingItem = ({
    isPopular,
    title,
    amount,
    period,
    features,
    path,
    className,
    sx,
}) => (
    <StyledPricing
        isPopular={isPopular}
        className={cn(className, "pricing-item")}
        sx={sx}
    >
        <StyledHeader isPopular={isPopular}>
            <StyledTitle>
                <span>{title}</span>
                {isPopular && <StyledBadge>Popular</StyledBadge>}
            </StyledTitle>
        </StyledHeader>
        <StyledAmount>
            <sup>$</sup>
            {amount}
            <span>/ {period}</span>
        </StyledAmount>
        <StyledFeatures>
            {features?.map((feat) => (
                <StyledItem key={feat.id}>{feat.content}</StyledItem>
            ))}
        </StyledFeatures>
        <div className="pricing-footer">
            <Button
                path={path}
                color={isPopular ? "primary" : "light"}
                fullwidth
            >
                Start Now
            </Button>
        </div>
    </StyledPricing>
);

PricingItem.propTypes = {
    isPopular: PropTypes.bool,
    title: PropTypes.string,
    amount: PropTypes.number,
    period: PropTypes.oneOf(["monthly", "annualy"]),
    features: PropTypes.arrayOf(PropTypes.shape(TextType)),
    className: PropTypes.string,
    path: PropTypes.string,
    sx: PropTypes.shape({}),
};

PricingItem.defaultProps = {
    path: "/",
};

export default PricingItem;
