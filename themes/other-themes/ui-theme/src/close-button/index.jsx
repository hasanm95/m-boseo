/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { CloseButtonWrap } from "./style";

const CloseButton = ({ onClick, className, label, sx }) => (
    <CloseButtonWrap
        onClick={onClick}
        className={className}
        aria-label={label}
        sx={sx}
    >
        <span />
    </CloseButtonWrap>
);
CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    sx: PropTypes.shape({}),
};
export default CloseButton;
