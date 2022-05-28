import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    StyledInfo,
    StyledIcon,
    StyledTitle,
    StyledContact,
    createStyles,
} from "./style";

const ContactInfo = ({ iconClass, title, desc, layout, className, sx }) => {
    const contactProps = {
        css: (theme) => createStyles(theme, layout),
    };
    return (
        <StyledInfo
            className={cn("contact-info", className)}
            sx={sx}
            {...contactProps}
        >
            {iconClass && (
                <StyledIcon className="contact-info-icon">
                    <i className={iconClass} />
                </StyledIcon>
            )}
            <div className="contact-info-content">
                {title && (
                    <StyledTitle
                        className="contact-info-title"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                {desc && (
                    <StyledContact className="contact-info-desc">
                        {desc}
                    </StyledContact>
                )}
            </div>
        </StyledInfo>
    );
};

ContactInfo.propTypes = {
    iconClass: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

ContactInfo.defaultProps = {
    layout: 1,
};

export default ContactInfo;
