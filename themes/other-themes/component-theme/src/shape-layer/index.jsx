/** @jsx jsx */
import { jsx } from "theme-ui";
import cn from "clsx";
import PropTypes from "prop-types";
import Shape from "./shape";
import { StyledShapeLayer } from "./style";

const ShapeLayer = ({ children, className, sx }) => (
    <StyledShapeLayer className={cn(className, "shape")} sx={sx}>
        {children}
    </StyledShapeLayer>
);

ShapeLayer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export { Shape };

export default ShapeLayer;
