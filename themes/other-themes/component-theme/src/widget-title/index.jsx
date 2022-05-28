import PropTypes from "prop-types";
import { StyledTitle } from "./style";

const WidgetTitle = ({ children, className }) => (
    <StyledTitle className={className}>{children}</StyledTitle>
);

WidgetTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default WidgetTitle;
