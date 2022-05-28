/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import {
    StyledMenu,
    StyledItem,
    StyledLink,
    StyledSubmenu,
    StyledSubItem,
    StyledSubLink,
} from "./style";

const MainMenu = ({ menu }) => (
    <StyledMenu>
        {menu?.map((item) => {
            const { submenu } = item;
            const hasSubmenu = submenu?.length > 0;
            return (
                <StyledItem hasSubmenu={hasSubmenu} key={item.id}>
                    <StyledLink path={item.link}>{item.text}</StyledLink>
                    {hasSubmenu && (
                        <Fragment>
                            <i className="lnr lnr-chevron-down" />
                            <StyledSubmenu className="submenu-nav">
                                {submenu.map((subitem) => (
                                    <StyledSubItem key={subitem.id}>
                                        <StyledSubLink path={subitem.link}>
                                            {subitem.text}
                                        </StyledSubLink>
                                    </StyledSubItem>
                                ))}
                            </StyledSubmenu>
                        </Fragment>
                    )}
                </StyledItem>
            );
        })}
    </StyledMenu>
);

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MainMenu;
