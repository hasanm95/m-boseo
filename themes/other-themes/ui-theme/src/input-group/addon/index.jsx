/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledInputGroupWrap } from "../style";

const InputGroupAddon = ({ children, dir = "append", className, sx }) => (
    <StyledInputGroupWrap
        className={cn(className, `input-group-${dir}`)}
        $dir={dir}
        sx={sx}
    >
        {children}
    </StyledInputGroupWrap>
);

InputGroupAddon.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dir: PropTypes.oneOf(["append", "prepend"]),
    sx: PropTypes.shape({}),
};

export default InputGroupAddon;
