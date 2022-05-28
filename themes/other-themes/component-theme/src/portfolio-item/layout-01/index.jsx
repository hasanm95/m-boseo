/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { Link } from "gatsby";
import { ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import {
    StyledWrap,
    StyledThumb,
    StyledInfo,
    StyledTitle,
    StyledType,
    StyledBtn,
} from "./style";

const PortfolioItem = ({ className, title, slug, type, image, sx }) => (
    <StyledWrap className={cn(className, "portfolio-item")} sx={sx}>
        {image?.src && (
            <StyledThumb>
                <Image src={image.src} alt={image?.alt || title} />
                <Link to={slug} className="link-overlay">
                    {title}
                </Link>
            </StyledThumb>
        )}

        <StyledInfo className="info">
            <StyledTitle>
                <Link to={slug}>{title}</Link>
            </StyledTitle>
            <StyledType>{type}</StyledType>
        </StyledInfo>
        <StyledBtn
            path={slug}
            variant="texted"
            color="white"
            iconPosition="right"
            iconClass="lnr lnr-arrow-right"
        >
            Read More <span className="sr-only">about {title}</span>
        </StyledBtn>
    </StyledWrap>
);

PortfolioItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    sx: PropTypes.shape({}),
};

export default PortfolioItem;
