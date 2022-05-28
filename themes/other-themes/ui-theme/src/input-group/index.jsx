/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledInputGroup } from "./style";

const InputGroup = ({ children, className, sx }) => (
    <StyledInputGroup className={cn(className, "input-group")} sx={sx}>
        {children}
    </StyledInputGroup>
);

InputGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default InputGroup;
