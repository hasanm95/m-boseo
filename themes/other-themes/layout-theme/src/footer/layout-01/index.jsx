/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { normalizedData } from "@boseo/helper/methods";
import {
    FooterTextWidget,
    FooterQuicklinksWidget01,
    FooterContactWidget01,
    FooterNewsLetterWidget,
    FooterMenuWidget01,
} from "gatsby-theme-component";
import {
    StyledFooter,
    StyledFooterTop,
    StyledFooterBottm,
    StyledCopyright,
} from "./style";

const Footer = ({ data }) => {
    const widgets = normalizedData(data?.widgets || [], "widget");
    return (
        <StyledFooter>
            <StyledFooterTop>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-sm-6 col-lg-3"
                            sx={{ mb: ["29px", null, null, 0] }}
                        >
                            <FooterTextWidget
                                data={{
                                    ...widgets?.["text-widget"],
                                    logo: data?.logo,
                                    socials: data?.socials,
                                }}
                            />
                        </div>
                        <div
                            className="col-sm-5 offset-sm-1 col-lg-3 offset-lg-0"
                            sx={{ mb: ["32px", null, null, 0] }}
                        >
                            <FooterQuicklinksWidget01
                                data={widgets?.["quick-link-widget"]}
                            />
                        </div>
                        <div
                            className="col-sm-6 col-lg-3"
                            sx={{ mb: ["24px", 0] }}
                        >
                            <FooterContactWidget01
                                data={{
                                    ...widgets?.["contact-widget"],
                                    contact_info: data?.contact_info,
                                }}
                            />
                        </div>
                        <div className="col-sm-5 offset-sm-1 col-lg-3 offset-lg-0">
                            <FooterNewsLetterWidget
                                data={widgets?.["newsletter-widget"]}
                            />
                        </div>
                    </div>
                </div>
            </StyledFooterTop>
            <StyledFooterBottm>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                            {data?.copyright_text && (
                                <StyledCopyright>
                                    &copy; {new Date().getFullYear()}.{" "}
                                    {data.copyright_text}
                                </StyledCopyright>
                            )}
                        </div>
                        <div className="col-12 col-md-7 offset-md-1 col-lg-5 offset-lg-3 col-xl-4 offset-xl-5 justify-content-end">
                            <FooterMenuWidget01
                                data={widgets?.["footer-link-widget"]}
                            />
                        </div>
                    </div>
                </div>
            </StyledFooterBottm>
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
        contact_info: PropTypes.shape({}),
        logo: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Footer;
