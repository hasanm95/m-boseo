/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import {
    StyledWrap,
    StyledThumb,
    StyledContent,
    StyledDesc,
    StyledName,
    StyledDesignation,
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
        {image && (
            <StyledThumb>
                <Image src={image?.src} alt={image?.alt || name} />
            </StyledThumb>
        )}
        {desc && (
            <StyledContent>
                <StyledDesc>“{desc}”</StyledDesc>
            </StyledContent>
        )}
        <div className="testimonial-info">
            {name && <StyledName>{name}</StyledName>}
            {(designation || company) && (
                <StyledDesignation>
                    {designation} {company && `at ${company}`}
                </StyledDesignation>
            )}
        </div>
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
