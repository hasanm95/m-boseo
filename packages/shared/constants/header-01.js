import logo from "@boseo/shared/images/logo/logo.png";
import logoLight from "@boseo/shared/images/logo/logo-light.png";

export default {
    id: "header-data-01",
    section: "header-01",
    logo: [
        {
            src: logo,
            alt: "logo",
        },
        {
            src: logoLight,
            alt: "logo",
        },
    ],
    enable_search: true,
    button: {
        path: "/service",
        content: "Start Now",
        shape: "square",
    },
};
