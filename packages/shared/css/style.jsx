import { Global, css, device, useTheme } from "../styled";

export const GlobalCSS = () => {
    const theme = useTheme();
    return (
        <Global
            styles={css`
                * {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                @media (prefers-reduced-motion: no-preference) {
                    :root {
                        scroll-behavior: smooth;
                    }
                }
                html {
                    -webkit-text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    scroll-behavior: smooth;
                    // Default
                    height: 100%;
                    font-size: 37.5%; // 1rem = 6px

                    // Medium Device >=768
                    ${device.medium} {
                        font-size: 43.75%; // 1rem = 7px
                    }

                    // Large Device >=992
                    ${device.large} {
                        font-size: 50%; // 1rem = 8px
                    }

                    // Extra Large Device >=1200
                    ${device.xlarge} {
                        font-size: 56.25%; // 1rem = 9px
                    }

                    // Extra Large Device >=1367
                    ${device.xxlarge} {
                        font-size: 62.5%; // 1rem = 10px
                    }
                }
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                nav,
                section,
                summary {
                    display: block;
                }
                audio,
                canvas,
                video {
                    display: inline-block;
                }
                audio:not([controls]) {
                    display: none;
                    height: 0;
                }
                [hidden] {
                    display: none;
                }
                html,
                button,
                input,
                select,
                textarea {
                    font-family: "Source Sans Pro", Helvetica, sans-serif;
                }
                a:focus {
                    outline: thin dotted;
                }
                a:active,
                a:hover {
                    outline: 0;
                }
                b,
                strong {
                    font-weight: bold;
                }
                blockquote,
                q {
                    -webkit-hyphens: none;
                    -moz-hyphens: none;
                    -ms-hyphens: none;
                    hyphens: none;
                    quotes: none;
                }
                small {
                    font-size: smaller;
                }
                sub,
                sup {
                    font-size: 75%;
                    line-height: 0;
                    position: relative;
                    vertical-align: baseline;
                }
                sup {
                    top: -0.5em;
                }
                sub {
                    bottom: -0.25em;
                }
                li > ul,
                li > ol {
                    margin: 0;
                }
                img {
                    -ms-interpolation-mode: bicubic;
                    border: 0;
                    vertical-align: middle;
                }
                svg:not(:root) {
                    overflow: hidden;
                }
                figure {
                    margin: 0;
                }
                form {
                    margin: 0;
                }
                button,
                input,
                select,
                textarea {
                    font-size: 100%;
                    margin: 0;
                    max-width: 100%;
                    vertical-align: baseline;
                }

                button,
                input {
                    line-height: normal;
                }

                button,
                html input[type="button"],
                input[type="reset"],
                input[type="submit"] {
                    -webkit-appearance: button;
                    -moz-appearance: button;
                    appearance: button;
                    cursor: pointer;
                }

                button[disabled],
                input[disabled] {
                    cursor: default;
                }

                input[type="checkbox"],
                input[type="radio"] {
                    padding: 0;
                }

                input[type="search"] {
                    -webkit-appearance: textfield;
                    -moz-appearance: textfield;
                    appearance: textfield;
                    appearance: textfield;
                    padding-right: 2px;
                    width: 100%;
                }

                input[type="search"]::-webkit-search-decoration {
                    -webkit-appearance: none;
                    appearance: none;
                }

                button::-moz-focus-inner,
                input::-moz-focus-inner {
                    border: 0;
                    padding: 0;
                }
                textarea {
                    overflow: auto;
                    vertical-align: top;
                }
                * {
                    box-sizing: border-box;
                }
                img {
                    max-width: 100%;
                }
                html {
                    overflow: hidden;
                    overflow-y: auto;
                }
                body {
                    overflow: hidden;
                    margin: 0;
                    padding: 0;
                    line-height: ${theme.lineHeights.body};
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-family: ${theme.fonts.body};
                    font-weight: ${theme.fontWeights.body};
                    color: ${theme.colors.text};
                    font-size: ${theme.fontSizes.body};
                    background: ${theme.colors.background};
                }
                a {
                    transition: ${theme.transition};
                    color: ${theme.colors.text};
                    text-decoration: none;
                    &:hover {
                        text-decoration: none;
                    }
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                .h1,
                .h2,
                .h3,
                .h4,
                .h5,
                .h6 {
                    font-family: ${theme.fonts.heading};
                    line-height: ${theme.lineHeights.heading};
                    color: ${theme.colors.heading};
                    font-weight: ${theme.fontWeights.heading};
                    margin: 0;
                    margin-bottom: 8px;
                }
                h1,
                .h1 {
                    font-size: ${theme.fontSizes.h1[0]};
                    ${device.small} {
                        font-size: ${theme.fontSizes.h1[1]};
                    }
                    ${device.medium} {
                        font-size: ${theme.fontSizes.h1[2]};
                    }
                    ${device.large} {
                        font-size: ${theme.fontSizes.h1[3]};
                    }
                }
                h2,
                .h2 {
                    font-size: ${theme.fontSizes.h2[0]};
                    ${device.small} {
                        font-size: ${theme.fontSizes.h2[1]};
                    }
                    ${device.medium} {
                        font-size: ${theme.fontSizes.h2[2]};
                    }
                    ${device.large} {
                        font-size: ${theme.fontSizes.h2[3]};
                    }
                    ${device.xlarge} {
                        font-size: ${theme.fontSizes.h2[4]};
                    }
                }
                h3,
                .h3 {
                    font-size: ${theme.fontSizes.h3[0]};
                    ${device.small} {
                        font-size: ${theme.fontSizes.h3[1]};
                    }
                    ${device.medium} {
                        font-size: ${theme.fontSizes.h3[2]};
                    }
                }
                h4,
                .h4 {
                    font-size: ${theme.fontSizes.h4[0]};
                    ${device.large} {
                        font-size: ${theme.fontSizes.h4[1]};
                    }
                }
                h5,
                .h5 {
                    font-size: ${theme.fontSizes.h5[0]};
                    ${device.large} {
                        font-size: ${theme.fontSizes.h5[1]};
                    }
                }
                h6,
                .h6 {
                    font-size: ${theme.fontSizes.h6[0]};
                    ${device.large} {
                        font-size: ${theme.fontSizes.h6[1]};
                    }
                }
                p {
                    margin: 0 0 15px;
                    font-family: ${theme.fonts.body};
                    color: ${theme.colors.text};
                    &:last-child {
                        margin-bottom: 0;
                    }
                    &:only-child {
                        margin-bottom: 0;
                    }
                }
                input,
                button,
                select,
                textarea {
                    background: transparent;
                    border: 1px solid ${theme.colors.boder};
                    transition: ${theme.transition};
                    color: ${theme.colors.text};
                    &:focus,
                    &:active {
                        outline: none;
                        border-color: ${theme.colors.primary};
                    }
                }
                input,
                select,
                textarea {
                    width: 100%;
                    font-size: 14px;
                }
                input,
                select {
                    padding: 0 15px;
                }
                button {
                    border: none;
                    background: transparent;
                    padding: 0;
                }
                .wrapper {
                    position: relative;
                }
                .container {
                    ${device.xlarge} {
                        max-width: 1200px;
                    }
                }
                .link-overlay {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    text-indent: -99999px;
                    z-index: 1;
                }
                .position-relative {
                    position: relative;
                }
                .h-100 {
                    height: 100%;
                }
                .gx {
                    &-8 {
                        margin-left: -4px;
                        margin-right: -4px;
                        & > [class*="col"] {
                            padding-left: 4px;
                            padding-right: 4px;
                        }
                    }
                    &-20 {
                        margin-left: -10px;
                        margin-right: -10px;
                        & > [class*="col"] {
                            padding-left: 10px;
                            padding-right: 10px;
                        }
                    }
                    &-30 {
                        margin-left: -15px;
                        margin-right: -15px;
                        & > [class*="col"] {
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                    }
                    &-45 {
                        margin-left: -22.5px;
                        margin-right: -22.5px;
                        & > [class*="col"] {
                            padding-left: 22.5px;
                            padding-right: 22.5px;
                        }
                    }
                    &-md {
                        ${device.medium} {
                            &-40 {
                                margin-left: -20px;
                                margin-right: -20px;
                                & > [class*="col"] {
                                    padding-left: 20px;
                                    padding-right: 20px;
                                }
                            }
                            &-50 {
                                margin-left: -25px;
                                margin-right: -25px;
                                & > [class*="col"] {
                                    padding-left: 25px;
                                    padding-right: 25px;
                                }
                            }
                        }
                    }
                    &-lg {
                        ${device.large} {
                            &-50 {
                                margin-left: -25px;
                                margin-right: -25px;
                                & > [class*="col"] {
                                    padding-left: 25px;
                                    padding-right: 25px;
                                }
                            }
                        }
                    }
                }
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    border: 0;
                }

                .sr-only-focusable:active,
                .sr-only-focusable:focus {
                    position: static;
                    width: auto;
                    height: auto;
                    margin: 0;
                    overflow: visible;
                    clip: auto;
                }
                .form-output {
                    margin-top: 8px;
                    &.errorMsg {
                        color: ${theme.colors.warning};
                    }
                    &.success {
                        color: ${theme.colors.success};
                    }
                }
            `}
        />
    );
};
