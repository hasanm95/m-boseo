/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StyledHR } from "./style";

const HRLine = ({ className, sx }) => (
    <StyledHR className={className} sx={sx} />
);

HRLine.propTypes = {
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default HRLine;
