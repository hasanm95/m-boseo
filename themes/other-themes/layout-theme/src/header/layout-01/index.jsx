/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useCallback, Fragment } from "react";
import loadable from "@loadable/component";
import PropTypes from "prop-types";
import { Logo, MainMenu } from "gatsby-theme-component";
import { BurgerButton } from "gatsby-theme-ui";
import { ImageType, ButtonType } from "@boseo/helper/types";
import { useSticky } from "@boseo/helper/hooks";
import {
    StyledHeader,
    StyledHeaderInner,
    StyledHeaderRight,
    StyledNavigation,
    StyledAction,
    StyleActionButton,
    StyledSearchBtn,
    StyledSearchWrap,
    StyledFixedHeader,
} from "./style";

const SearchFlyout = loadable(() => import("gatsby-theme-component"), {
    resolveComponent: (components) => components.SearchFlyout,
});
const MenuOffcanvas = loadable(() => import("gatsby-theme-component"), {
    resolveComponent: (components) => components.MenuOffcanvas,
});
const Header = ({ sx, hasBorder, transparent, data }) => {
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
        <Fragment>
            <StyledHeader className="header" sx={sx} transparent={transparent}>
                <StyledHeaderInner
                    ref={measuredRef}
                    isSticky={sticky}
                    hasBorder={hasBorder}
                    transparent={transparent}
                >
                    <div className="container">
                        <div className="row" sx={{ alignItems: "center" }}>
                            <div className="col-5 col-sm-7 col-lg-2">
                                {data?.logo && (
                                    <Logo
                                        mainLogo={data.logo?.[0]}
                                        lightLogo={data.logo?.[1]}
                                    />
                                )}
                            </div>
                            <div className="col-7 col-sm-5 col-lg-10">
                                <StyledHeaderRight>
                                    <StyledNavigation>
                                        <MainMenu menu={data?.menu} />
                                    </StyledNavigation>
                                    <StyledAction>
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
                                                <SearchFlyout
                                                    show={showSearch}
                                                    isInSticky={sticky}
                                                />
                                            </StyledSearchWrap>
                                        )}

                                        <BurgerButton
                                            label="Click here to open offcanvas menu"
                                            onClick={offCanvasHandler}
                                            sx={{
                                                mx: ["12px", "22px"],
                                                display: [
                                                    null,
                                                    null,
                                                    null,
                                                    "none",
                                                ],
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
                                    </StyledAction>
                                </StyledHeaderRight>
                            </div>
                        </div>
                    </div>
                </StyledHeaderInner>
                <StyledFixedHeader height={headerHeight} />
            </StyledHeader>
            <MenuOffcanvas
                isOpen={offCanvasOpen}
                onClick={offCanvasHandler}
                logo={data?.logo}
                menu={data?.menu}
            />
        </Fragment>
    );
};

Header.propTypes = {
    sx: PropTypes.shape({}),
    hasBorder: PropTypes.bool,
    transparent: PropTypes.bool,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        button: PropTypes.shape(ButtonType),
        enable_search: PropTypes.bool,
        menu: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
};

export default Header;
