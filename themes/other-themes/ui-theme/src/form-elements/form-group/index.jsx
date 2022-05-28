/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";

const FormGroup = ({ children, className, sx }) => (
    <div className={cn(className, "form-group")} sx={sx}>
        {children}
    </div>
);

FormGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default FormGroup;
