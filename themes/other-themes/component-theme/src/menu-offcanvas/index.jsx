/** @jsx jsx */
import { jsx } from "theme-ui";
import { memo } from "react";
import PropTypes from "prop-types";
import { OffCanvas, OffCanvasHeader, OffCanvasBody } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import Logo from "../logo";
import { MobileMenu } from "../menu";

const MenuOffcanvas = ({ isOpen, onClick, menu, logo, ...rest }) => (
    <OffCanvas isOpen={isOpen} onClick={onClick} {...rest}>
        <OffCanvasHeader onClick={onClick}>
            {logo && <Logo mainLogo={logo?.[0]} lightLogo={logo?.[1]} />}
        </OffCanvasHeader>
        <OffCanvasBody>{menu && <MobileMenu menu={menu} />}</OffCanvasBody>
    </OffCanvas>
);

MenuOffcanvas.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    menu: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
};

export default memo(MenuOffcanvas);
