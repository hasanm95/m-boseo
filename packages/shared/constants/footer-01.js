import logo from "@boseo/shared/images/logo/logo.png";
import logoLight from "@boseo/shared/images/logo/logo-light.png";

export default {
    id: "footer-data-01",
    section: "footer-01",
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
    widgets: [
        {
            id: 1,
            widget: "text-widget",
            texts: [
                {
                    content:
                        "With a search first mentality across digital marketing, our passionate consulting team is hands-on to help conquer anything",
                },
            ],
        },
        {
            id: 2,
            widget: "quick-link-widget",
            title: "Quick Links",
            menu: [
                {
                    id: 1,
                    text: "Home",
                    link: "/",
                },
                {
                    id: 2,
                    text: "Services",
                    link: "/service",
                },
                {
                    id: 3,
                    text: "About Us",
                    link: "/about",
                },
                {
                    id: 4,
                    text: "Testimonials",
                    link: "/testimonial",
                },
                {
                    id: 5,
                    text: "Blog",
                    link: "/blog",
                },
            ],
        },
        {
            id: 4,
            title: "Contact",
            widget: "contact-widget",
        },
        {
            id: 5,
            title: "Newsletter",
            widget: "newsletter-widget",
        },
        {
            id: 5,
            widget: "footer-link-widget",
            menu: [
                {
                    id: 1,
                    text: "Privacy Policy",
                    link: "/",
                },
                {
                    id: 2,
                    text: "Terms & Conditions",
                    link: "/",
                },
                {
                    id: 3,
                    text: "Help Center",
                    link: "/",
                },
            ],
        },
    ],
    copyright_text: "All Rights Reserved",
};
