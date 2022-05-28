/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Image } from "gatsby-theme-ui";
import { ImageType, TextType } from "@boseo/helper/types";
import {
    StyledPricing,
    StyledHeader,
    StyledTitle,
    StyledThumb,
    StyledBadge,
    StyledAmount,
    StyledFeatures,
    StyledItem,
    StyledFooter,
} from "./style";

const PricingItem = ({
    isPopular,
    title,
    image,
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
            <StyledTitle>{title}</StyledTitle>
            {image?.src && (
                <StyledThumb>
                    <Image src={image.src} alt={image.alt || title} />
                    <StaticImage
                        className="shape-img"
                        src="../../images/shape/p01.png"
                        alt="prcing shape"
                        layout="fixed"
                        width={225}
                        height={168}
                    />
                </StyledThumb>
            )}
            <StyledAmount>
                <sup>$</sup>
                {amount}
                <span>/ {period === "monthly" ? "month" : "year"}</span>
            </StyledAmount>
            {isPopular && <StyledBadge>Popular</StyledBadge>}
        </StyledHeader>
        <StyledFeatures>
            {features?.map((feat) => (
                <StyledItem key={feat.id}>{feat.content}</StyledItem>
            ))}
        </StyledFeatures>
        <StyledFooter>
            <Button
                path={path}
                color={isPopular ? "primary" : "light"}
                fullwidth
            >
                Start Now
            </Button>
        </StyledFooter>
    </StyledPricing>
);

PricingItem.propTypes = {
    isPopular: PropTypes.bool,
    title: PropTypes.string,
    amount: PropTypes.number,
    period: PropTypes.oneOf(["monthly", "annualy"]),
    features: PropTypes.arrayOf(PropTypes.shape(TextType)),
    image: PropTypes.shape(ImageType),
    className: PropTypes.string,
    path: PropTypes.string,
    sx: PropTypes.shape({}),
};

PricingItem.defaultProps = {
    path: "/",
};

export default PricingItem;
