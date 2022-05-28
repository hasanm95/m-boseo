/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { getClosest, getSiblings } from "@boseo/helper/methods";
import { StyledItem, StyledLink, StyledSubmenu, StyledButton } from "./style";

const MobileMenu = ({ menu }) => {
    const removeClassFromChildren = (parent) => {
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i].tagName === "UL") {
                const child = parent.children[i].children;
                for (let j = 0; j < child.length; j++) {
                    child[j].classList.remove("submenu-open");
                }
            }
        }
    };

    const onClickHandler = (e, selector) => {
        const { target } = e;
        const parentEl = target.parentElement;
        if (
            parentEl.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, selector);
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                sibling.classList.remove("submenu-open");
                removeClassFromChildren(sibling);
            });
            removeClassFromChildren(parent);
            parent.classList.toggle("submenu-open");
        }
    };

    return (
        <ul className="mobile-menu">
            {menu.map((item, i) => {
                const { submenu } = item;
                const hasSubmenu = submenu?.length > 0;

                return (
                    <StyledItem
                        key={item.id}
                        hasSubmenu={submenu}
                        className="menu-item"
                        id={`menu-item-${i}`}
                    >
                        <StyledLink path={item.link}>{item.text}</StyledLink>
                        {hasSubmenu && (
                            <Fragment>
                                <StyledButton
                                    type="button"
                                    className="menu-expand"
                                    onClick={(e) =>
                                        onClickHandler(e, `#menu-item-${i}`)
                                    }
                                >
                                    <i className="icon fa fa-angle-down" />
                                </StyledButton>
                                <StyledSubmenu className="submenu">
                                    {submenu.map((subitem) => (
                                        <StyledItem
                                            key={subitem.id}
                                            className="menu-item"
                                            id={`submenu-item-${i}`}
                                            inSubmenu
                                        >
                                            <StyledLink
                                                path={subitem.link}
                                                inSubmenu
                                            >
                                                {subitem.text}
                                            </StyledLink>
                                        </StyledItem>
                                    ))}
                                </StyledSubmenu>
                            </Fragment>
                        )}
                    </StyledItem>
                );
            })}
        </ul>
    );
};

MobileMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default MobileMenu;
