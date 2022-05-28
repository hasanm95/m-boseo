/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import {
    StyledWrap,
    StyledThumb,
    StyledInfo,
    StyledName,
    StyledDesignation,
    StyledQuote,
} from "./style";

const Testimonial = ({
    name,
    designation,
    company,
    desc,
    image,
    className,
    sx,
}) => (
    <StyledWrap className={cn(className, "testimonial")} sx={sx}>
        {desc && <p>{desc}</p>}
        <StyledInfo>
            {image?.src && (
                <StyledThumb>
                    <Image src={image.src} alt={image?.alt || name} />
                </StyledThumb>
            )}

            <div className="desc">
                {name && <StyledName>{name}</StyledName>}
                {(designation || company) && (
                    <StyledDesignation>
                        {designation} at {company}
                    </StyledDesignation>
                )}
            </div>
            <StyledQuote>
                <i className="fa fa-quote-right" />
            </StyledQuote>
        </StyledInfo>
    </StyledWrap>
);

Testimonial.propTypes = {
    name: PropTypes.string,
    designation: PropTypes.string,
    company: PropTypes.string,
    desc: PropTypes.string,
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
    sx: PropTypes.shape({}),
};

export default Testimonial;
