/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const WidgetBox = ({ children, className, sx }) => (
    <div className={className} sx={sx}>
        {children}
    </div>
);

WidgetBox.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default WidgetBox;
