/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { normalizedData } from "@boseo/helper/methods";
import {
    Logo,
    FooterContactWidget02,
    FooterQuicklinksWidget02,
} from "gatsby-theme-component";
import { Social, SocialLink } from "gatsby-theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { StyledFooter, StyledCopyright } from "./style";

const Footer = ({ data }) => {
    const widgets = normalizedData(data?.widgets || [], "widget");
    return (
        <StyledFooter>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3" sx={{ mb: "32px" }}>
                        {data?.logo && (
                            <Logo
                                mainLogo={data?.logo?.[0]}
                                lightLogo={data?.logo?.[1]}
                            />
                        )}

                        {data?.copyright_text && (
                            <StyledCopyright>
                                &copy; {new Date().getFullYear()}.{" "}
                                {data.copyright_text}
                            </StyledCopyright>
                        )}
                    </div>
                    <div className="col-lg-4 col-xl-5" sx={{ mb: "20px" }}>
                        <FooterContactWidget02
                            data={{
                                ...widgets?.["contact-widget"],
                                contact_info: data?.contact_info,
                            }}
                        />
                    </div>
                    <div
                        className="col-lg-5 col-xl-4"
                        sx={{ pl: [null, null, null, "40px"] }}
                    >
                        <FooterQuicklinksWidget02
                            sx={{ mb: "20px" }}
                            data={widgets?.["quick-link-widget"]}
                        />
                        {data?.socials && (
                            <Social space={26} size="sm">
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
                    </div>
                </div>
            </div>
            <div className="layer-shape">
                <StaticImage
                    className="layer-shape-two"
                    src="../../images/foooter-shape-02.png"
                    alt="Boseo"
                />
                <StaticImage
                    className="layer-shape-one"
                    src="../../images/foooter-shape-01.png"
                    alt="Boseo"
                />
            </div>
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
        contact_info: PropTypes.shape({}),
        socials: PropTypes.arrayOf(PropTypes.shape({})),
        logo: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};
export default Footer;
