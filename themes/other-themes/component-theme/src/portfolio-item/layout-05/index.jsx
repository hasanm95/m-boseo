/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { Link } from "gatsby";
import { ImageType } from "@boseo/helper/types";
import { Image, Anchor } from "gatsby-theme-ui";
import {
    StyledWrap,
    StyledThumb,
    StyledInfo,
    StyledTitle,
    StyledType,
    StyledExcerpt,
} from "./style";

const PortfolioItem = ({
    className,
    title,
    slug,
    type,
    image,
    excerpt,
    sx,
}) => (
    <StyledWrap className={cn(className, "portfolio-item")} sx={sx}>
        <StyledThumb>
            <Image src={image?.src} alt={image?.alt || title} />
            <Link to={slug} className="link-overlay">
                {title}
            </Link>
        </StyledThumb>
        <StyledInfo className="info">
            <StyledType>{type}</StyledType>
            <StyledTitle>
                <Anchor path={slug}>{title}</Anchor>
            </StyledTitle>
            {excerpt && <StyledExcerpt>{excerpt}</StyledExcerpt>}
        </StyledInfo>
    </StyledWrap>
);

PortfolioItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    excerpt: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default PortfolioItem;
