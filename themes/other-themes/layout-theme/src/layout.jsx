import PropTypes from "prop-types";
import { GlobalCSS, BootstrapCSS } from "@boseo/shared/css";
import { baseTheme } from "@boseo/shared/themes";
import { ThemeProvider, merge } from "theme-ui";
import "./fonts/fonts.css";
import "@boseo/shared/fonts/linearicons.css";
import "@boseo/shared/fonts/font-awesome.css";
import { ScrollToTop } from "gatsby-theme-ui";

const Layout = ({ children, theme }) => (
    <ThemeProvider theme={merge(baseTheme, theme)}>
        <BootstrapCSS />
        <GlobalCSS />
        {children}
        <ScrollToTop />
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({}),
};

Layout.defaultProps = {
    theme: {},
};

export default Layout;
