import { memo } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import CloseButton from "../../close-button";
import {
    OffCanvasHeaderWrap,
    OffCanvasHeaderLeft,
    OffCanvasHeaderRight,
} from "./style";

const OffCanvasHeader = ({ children, onClick, className, sx }) => (
    <OffCanvasHeaderWrap className={cn("offcanvas-header", className)} sx={sx}>
        <OffCanvasHeaderLeft>{children}</OffCanvasHeaderLeft>
        <OffCanvasHeaderRight>
            <CloseButton
                onClick={onClick}
                label="click here to close offcanvas"
            />
        </OffCanvasHeaderRight>
    </OffCanvasHeaderWrap>
);

OffCanvasHeader.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default memo(OffCanvasHeader);
