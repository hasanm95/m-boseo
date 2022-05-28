/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledNav, StyledBtn, StyledLabel } from "./style";

const Switcher = ({ textLeft, textRight, className, onClick, active, sx }) => (
    <StyledNav className={cn(className, "switcher")} sx={sx}>
        <StyledBtn type="button" onClick={() => onClick(false)} active={active}>
            {textLeft}
        </StyledBtn>
        <StyledLabel className="switch" active={active} />
        <StyledBtn type="button" onClick={() => onClick(true)} active={!active}>
            {textRight}
        </StyledBtn>
    </StyledNav>
);

Switcher.propTypes = {
    textLeft: PropTypes.string,
    textRight: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    sx: PropTypes.shape({}),
};

Switcher.defaultProps = {
    textLeft: "yearly",
    textRight: "lifetime",
};
export default Switcher;
