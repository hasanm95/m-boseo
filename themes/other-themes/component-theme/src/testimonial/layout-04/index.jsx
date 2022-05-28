/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledDesc, StyledInfo, StyledName, StyledDesignation } from "./style";

const Testimonial = ({ name, designation, company, desc, className, sx }) => (
    <div className={cn(className, "testimonial")} sx={sx}>
        {desc && <StyledDesc>“{desc}”</StyledDesc>}
        <StyledInfo>
            {name && <StyledName>{name}</StyledName>}
            {(designation || company) && (
                <StyledDesignation>
                    {designation} at {company}
                </StyledDesignation>
            )}
        </StyledInfo>
    </div>
);

Testimonial.propTypes = {
    name: PropTypes.string,
    designation: PropTypes.string,
    company: PropTypes.string,
    desc: PropTypes.string,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default Testimonial;
