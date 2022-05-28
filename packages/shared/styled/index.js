import {
    jsx,
    css,
    keyframes,
    ThemeProvider,
    Global,
    useTheme,
} from "@emotion/react";
import styled from "@emotion/styled";
import { themeGet } from "@styled-system/theme-get";
// import tinycolor from "tinycolor2";
import loadable from "@loadable/component";

const tinycolor = loadable(() => import("tinycolor2"));

const breakpoints = ["576px", "768px", "992px", "1200px", "1400px", "1600px"];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
    xxxlarge: `@media screen and (min-width: ${breakpoints[5]})`,
};

export {
    css,
    jsx,
    keyframes,
    ThemeProvider,
    themeGet,
    Global,
    useTheme,
    tinycolor,
};
export * from "styled-system";
export default styled;
