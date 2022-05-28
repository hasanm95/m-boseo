/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { ContactForm } from "gatsby-theme-component";
import {
    StyledSection,
    StyledTitle,
    StyledContactInfo,
    StyledInfoLocation,
    StyledInfoAddress,
    StyledInfoMail,
    StyledInfoPhone,
} from "./style";

const ContactFormArea = ({ data }) => (
    <StyledSection className="contact-form-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-xl-3">
                    <StyledTitle className="title">Infomation</StyledTitle>
                    <StyledContactInfo className="contact-info">
                        {(data?.contact_info?.state ||
                            data?.contact_info?.country) && (
                            <StyledInfoLocation>
                                {data.contact_info?.state && (
                                    <span>{data.contact_info.state},</span>
                                )}
                                {data.contact_info?.country && (
                                    <Fragment>
                                        {data.contact_info.country}
                                    </Fragment>
                                )}
                            </StyledInfoLocation>
                        )}
                        {data?.contact_info?.address && (
                            <StyledInfoAddress>
                                {data.contact_info.address}
                            </StyledInfoAddress>
                        )}
                        {data?.contact_info?.email && (
                            <StyledInfoMail
                                href={`mailto:${data.contact_info.email}`}
                            >
                                {data.contact_info.email}
                            </StyledInfoMail>
                        )}

                        {data?.contact_info?.phone && (
                            <StyledInfoPhone
                                href={`tel:${data.contact_info.phone}`}
                            >
                                {data.contact_info.phone}
                            </StyledInfoPhone>
                        )}
                    </StyledContactInfo>
                </div>
                <div className="col-lg-8 offset-xl-1">
                    <StyledTitle className="title">Get In Touch</StyledTitle>
                    <ContactForm />
                </div>
            </div>
        </div>
    </StyledSection>
);

ContactFormArea.propTypes = {
    data: PropTypes.shape({
        contact_info: PropTypes.shape({
            state: PropTypes.string,
            country: PropTypes.string,
            address: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
        }),
    }),
};

export default ContactFormArea;
