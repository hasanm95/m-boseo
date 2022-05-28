/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import React, { useState, useCallback } from "react";
import loadable from "@loadable/component";
import { Logo, MainMenu } from "gatsby-theme-component";
import { BurgerButton, Social, SocialLink } from "gatsby-theme-ui";
import { ImageType, ButtonType, SocialType } from "@boseo/helper/types";
import { useSticky } from "@boseo/helper/hooks";
import {
    StyledHeader,
    StyledHeaderTop,
    StyledHeaderBottom,
    StyledHeaderInner,
    StyledHeaderMain,
    StyledHeaderCol,
    StyledNavigation,
    StyledInfo,
    StyledInfoItem,
    StyleActionButton,
    StyledSearchBtn,
    StyledFixedHeader,
    StyledSearchWrap,
} from "./style";

const SearchFlyout = loadable(() => import("gatsby-theme-component"), {
    resolveComponent: (components) => components.SearchFlyout,
});
const MenuOffcanvas = loadable(() => import("gatsby-theme-component"), {
    resolveComponent: (components) => components.MenuOffcanvas,
});

const Header = ({ transparent, data }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const { sticky, measuredRef, headerHeight } = useSticky();

    const handleSearch = useCallback(() => {
        setShowSearch((prev) => !prev);
    }, [showSearch]);

    const offCanvasHandler = useCallback(() => {
        setOffCanvasOpen((prev) => !prev);
    }, [offCanvasOpen]);

    return (
        <>
            <StyledHeader transparent={transparent}>
                <StyledHeaderTop transparent={transparent}>
                    <StyledHeaderMain className="container">
                        <StyledHeaderCol left>
                            {data?.contact_info && (
                                <StyledInfo>
                                    {data.contact_info?.address && (
                                        <StyledInfoItem href="#!">
                                            <i className="icon lnr lnr-map-marker" />
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: data.contact_info
                                                        .address,
                                                }}
                                            />
                                        </StyledInfoItem>
                                    )}
                                    {data.contact_info?.phone && (
                                        <StyledInfoItem
                                            href={`tel:${data.contact_info.phone}`}
                                        >
                                            <i className="icon lnr lnr-phone-handset" />
                                            {data.contact_info.phone}
                                        </StyledInfoItem>
                                    )}
                                </StyledInfo>
                            )}
                        </StyledHeaderCol>
                        <StyledHeaderCol right>
                            {data?.socials && (
                                <Social space={14}>
                                    {data.socials?.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            href={social.link}
                                            label={social.title}
                                        >
                                            <i className={social.icon} />
                                        </SocialLink>
                                    ))}
                                </Social>
                            )}
                        </StyledHeaderCol>
                    </StyledHeaderMain>
                </StyledHeaderTop>
                <StyledHeaderBottom>
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
                                {data?.enable_search && (
                                    <StyledSearchWrap>
                                        <StyledSearchBtn
                                            type="button"
                                            onClick={handleSearch}
                                            aria-label="Click here to open search form"
                                        >
                                            {!showSearch && (
                                                <span className="lnr lnr-magnifier" />
                                            )}
                                            {showSearch && (
                                                <span className="lnr lnr-cross" />
                                            )}
                                        </StyledSearchBtn>
                                        <SearchFlyout show={showSearch} />
                                    </StyledSearchWrap>
                                )}
                                <BurgerButton
                                    onClick={offCanvasHandler}
                                    label="Click here to open pffcanvas menu"
                                    sx={{
                                        mx: ["12px", "22px"],
                                        display: [null, null, null, "none"],
                                    }}
                                />
                                {data?.button && (
                                    <StyleActionButton
                                        path={data.button.path}
                                        isSticky={sticky}
                                        {...data.button}
                                    >
                                        {data.button.content}
                                    </StyleActionButton>
                                )}
                            </StyledHeaderCol>
                        </StyledHeaderMain>
                    </StyledHeaderInner>
                    <StyledFixedHeader height={headerHeight} />
                </StyledHeaderBottom>
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
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        button: PropTypes.shape(ButtonType),
        enable_search: PropTypes.bool,
        menu: PropTypes.arrayOf(PropTypes.shape({})),
        contact_info: PropTypes.shape({
            address: PropTypes.string,
            phone: PropTypes.string,
        }),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    }).isRequired,
};

Header.defaultProps = {
    transparent: true,
};

export default Header;
