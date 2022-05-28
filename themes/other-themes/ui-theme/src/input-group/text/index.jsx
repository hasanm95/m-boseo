/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledInputGroupText } from "../style";

const InputGroupText = ({ children, className, sx }) => (
    <StyledInputGroupText className={cn(className, `input-group-text`)} sx={sx}>
        {children}
    </StyledInputGroupText>
);

InputGroupText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default InputGroupText;
