/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { memo } from "react";
import cn from "clsx";
import { OffCanvasBodyWrap } from "./style";

const OffCanvasBody = ({ children, className, sx }) => (
    <OffCanvasBodyWrap className={cn("offcanvas-body", className)} sx={sx}>
        {children}
    </OffCanvasBodyWrap>
);

OffCanvasBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default memo(OffCanvasBody);
