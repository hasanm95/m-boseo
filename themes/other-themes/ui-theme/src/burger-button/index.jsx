/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledButton } from "./style";

const BurgerButton = ({ onClick, className, sx, label }) => (
    <StyledButton
        className={cn(className, "burger-btn")}
        type="button"
        onClick={onClick}
        sx={sx}
        aria-label={label}
    >
        <span />
        <span />
        <span />
    </StyledButton>
);

BurgerButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    label: PropTypes.string,
};

BurgerButton.defaultProps = {
    label: "Click to open menu",
};

export default BurgerButton;
