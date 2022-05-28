/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { normalizedData } from "@boseo/helper/methods";
import {
    NewsletterForm02,
    Logo,
    FooterMenuWidget02,
} from "gatsby-theme-component";
import { Social, SocialLink } from "gatsby-theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import {
    StyledFooter,
    StyledFooterTop,
    StyledFooterBottom,
    StyledCopyright,
} from "./style";

const Footer = ({ data }) => {
    const widgets = normalizedData(data?.widgets || [], "widget");
    return (
        <StyledFooter>
            <StyledFooterTop>
                {widgets?.["newsletter-widget"] && (
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-sm-9 col-md-6"
                                sx={{
                                    textAlign: "center",
                                    mx: "auto",
                                }}
                            >
                                <h2 sx={{ mb: ["40px", null, "50px"] }}>
                                    {widgets["newsletter-widget"]?.title}
                                </h2>
                                <NewsletterForm02 className="newsletter-form" />
                            </div>
                            <StaticImage
                                className="bg-map-img"
                                src="../../images/map.png"
                                alt="Boseo"
                            />
                        </div>
                    </div>
                )}
            </StyledFooterTop>
            <StyledFooterBottom>
                <div className="container-fluid">
                    <div className="row" sx={{ alignItems: "center" }}>
                        <div
                            className="col-xl-1 col-lg-2 col-md-4"
                            sx={{ mb: ["20px", null, null, 0] }}
                        >
                            {data?.logo && (
                                <Logo
                                    mainLogo={data?.logo?.[0]}
                                    lightLogo={data?.logo?.[1]}
                                    sx={{ textAlign: ["center", null, "left"] }}
                                />
                            )}
                        </div>
                        <div
                            className="col-lg-3 col-xl-2 col-xxl-3 col-md-8"
                            sx={{ mb: ["20px", null, null, 0] }}
                        >
                            {data?.copyright_text && (
                                <StyledCopyright>
                                    &copy; {new Date().getFullYear()}.{" "}
                                    {data.copyright_text}
                                </StyledCopyright>
                            )}
                        </div>
                        <div
                            className="col-lg-5 col-xl-7 col-xxl-6 col-md-8"
                            sx={{ mb: ["20px", null, 0] }}
                        >
                            <FooterMenuWidget02
                                data={widgets?.["quick-link-widget"]}
                            />
                        </div>
                        <div className="col-lg-2 col-md-4">
                            {data?.socials && (
                                <Social
                                    space={30}
                                    sx={{ textAlign: ["center", "right"] }}
                                >
                                    {data.socials?.map((social) => (
                                        <SocialLink
                                            href={social.link}
                                            key={social.id}
                                            label={social.title}
                                        >
                                            <i className={social.icon} />
                                        </SocialLink>
                                    ))}
                                </Social>
                            )}
                        </div>
                    </div>
                </div>
            </StyledFooterBottom>
        </StyledFooter>
    );
};

Footer.propTypes = {
    data: PropTypes.shape({
        copyright_text: PropTypes.string,
        widgets: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                menu: PropTypes.arrayOf(PropTypes.shape({})),
            })
        ),
        socials: PropTypes.arrayOf(PropTypes.shape({})),
        logo: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Footer;
