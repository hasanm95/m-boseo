import PropTypes from "prop-types";
import { StyledShape, createStyles } from "./style";

const Shape = ({ layout }) => {
    const shapeProps = {
        css: (theme) => createStyles(theme, layout),
    };
    return <StyledShape {...shapeProps} />;
};

Shape.propTypes = {
    layout: PropTypes.number.isRequired,
};

export default Shape;
