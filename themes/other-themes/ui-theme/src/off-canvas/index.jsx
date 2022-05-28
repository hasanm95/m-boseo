/** @jsx jsx */
import { jsx } from "theme-ui";
import { memo } from "react";
import { Portal } from "react-portal";
import cn from "clsx";
import PropTypes from "prop-types";
import OffCanvasHeader from "./header";
import OffCanvasBody from "./body";
import { OffCanvaseWrap, OffCanvasInner } from "./style";

const OffCanvas = ({ children, onClick, isOpen, className, sx, ...rest }) => (
    <Portal>
        <OffCanvaseWrap isOpen={isOpen} onClick={onClick}>
            <OffCanvasInner
                isOpen={isOpen}
                onClick={(e) => e.stopPropagation()}
                className={cn(className, "offcanvas")}
                sx={sx}
                {...rest}
            >
                {children}
            </OffCanvasInner>
        </OffCanvaseWrap>
    </Portal>
);

OffCanvas.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export { OffCanvasHeader, OffCanvasBody };
export default memo(OffCanvas);
