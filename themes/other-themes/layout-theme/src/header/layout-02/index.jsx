/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import React, { useState, useCallback } from "react";
import loadable from "@loadable/component";
import { Logo, MainMenu } from "gatsby-theme-component";
import { BurgerButton } from "gatsby-theme-ui";
import { ImageType, ButtonType } from "@boseo/helper/types";
import { useSticky } from "@boseo/helper/hooks";
import {
    StyledHeader,
    StyledHeaderInner,
    StyledHeaderMain,
    StyledHeaderCol,
    StyledNavigation,
    StyledAction,
    StyledInfo,
    StyledInfoItem,
    StyleActionButton,
    StyledFixedHeader,
} from "./style";

const MenuOffcanvas = loadable(() => import("gatsby-theme-component"), {
    resolveComponent: (components) => components.MenuOffcanvas,
});

const Header = ({ transparent, data }) => {
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const { sticky, measuredRef, headerHeight } = useSticky();

    const offCanvasHandler = useCallback(() => {
        setOffCanvasOpen((prev) => !prev);
    }, [offCanvasOpen]);

    return (
        <>
            <StyledHeader transparent={transparent}>
                <StyledHeaderInner
                    transparent={transparent}
                    ref={measuredRef}
                    isSticky={sticky}
                >
                    <StyledHeaderMain className="container">
                        <StyledHeaderCol left>
                            {data?.logo && (
                                <Logo
                                    mainLogo={data.logo?.[0]}
                                    lightLogo={data.logo?.[1]}
                                />
                            )}
                        </StyledHeaderCol>
                        <StyledHeaderCol center>
                            <StyledNavigation>
                                <MainMenu menu={data?.menu} />
                            </StyledNavigation>
                        </StyledHeaderCol>
                        <StyledHeaderCol right>
                            <StyledAction>
                                {data?.contact_info && (
                                    <StyledInfo>
                                        {data.contact_info?.phone && (
                                            <StyledInfoItem
                                                href={`tel:${data.contact_info.phone}`}
                                            >
                                                {data.contact_info.phone}
                                            </StyledInfoItem>
                                        )}
                                        {data.contact_info?.email && (
                                            <StyledInfoItem
                                                href={`mailto:${data.contact_info.email}`}
                                            >
                                                {data.contact_info.email}
                                            </StyledInfoItem>
                                        )}
                                    </StyledInfo>
                                )}

                                {data?.button && (
                                    <StyleActionButton
                                        path={data.button.path}
                                        isSticky={sticky}
                                        {...data.button}
                                    >
                                        {data.button.content}
                                    </StyleActionButton>
                                )}
                                <BurgerButton
                                    onClick={offCanvasHandler}
                                    label="Click here to open pffcanvas menu"
                                    sx={{
                                        display: [
                                            null,
                                            null,
                                            null,
                                            null,
                                            "none",
                                        ],
                                    }}
                                />
                            </StyledAction>
                        </StyledHeaderCol>
                    </StyledHeaderMain>
                </StyledHeaderInner>
                <StyledFixedHeader height={headerHeight} />
            </StyledHeader>
            <MenuOffcanvas
                isOpen={offCanvasOpen}
                onClick={offCanvasHandler}
                logo={data?.logo}
                menu={data?.menu}
            />
        </>
    );
};

Header.propTypes = {
    transparent: PropTypes.bool,
    sx: PropTypes.shape({}),
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        button: PropTypes.shape(ButtonType),
        menu: PropTypes.arrayOf(PropTypes.shape({})),
        contact_info: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string,
        }),
    }).isRequired,
};

Header.defaultProps = {
    transparent: true,
};

export default Header;
