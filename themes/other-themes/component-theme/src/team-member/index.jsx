import React, { useState } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Image, Social, SocialLink } from "gatsby-theme-ui";
import { ImageType, SocialType } from "@boseo/helper/types";
import {
    StyledTeamMember,
    StyledThumb,
    StyledContent,
    StyledTitle,
    StyledDesignation,
    StyledButton,
    StyledHoverContent,
    StyledCloseButton,
    StyledDesc,
} from "./style";

const TeamMember = ({ title, designation, image, description, socials }) => {
    const [show, setShow] = useState(false);
    return (
        <StyledTeamMember className="team-member">
            {image?.src && (
                <StyledThumb className="thumb">
                    <Image src={image.src} alt={image?.alt || title} />
                </StyledThumb>
            )}

            <StyledContent className="content">
                {title && <StyledTitle className="name">{title}</StyledTitle>}
                {designation && (
                    <StyledDesignation className="designation">
                        {designation}
                    </StyledDesignation>
                )}
            </StyledContent>
            <StyledButton
                type="button"
                aria-label="click here to see more"
                onClick={() => setShow((prev) => !prev)}
            >
                <StaticImage src="../images/icons/eye.png" alt="Icon" />
            </StyledButton>
            <StyledHoverContent className="hover-content" show={show}>
                <StyledCloseButton type="button" onClick={() => setShow(false)}>
                    <i className="lnr lnr-cross" />
                </StyledCloseButton>
                {title && (
                    <StyledTitle inHover className="name">
                        {title}
                    </StyledTitle>
                )}
                {designation && (
                    <StyledDesignation inHover className="designation">
                        {designation}
                    </StyledDesignation>
                )}

                {description && (
                    <StyledDesc className="desc">{description}</StyledDesc>
                )}

                {socials && (
                    <Social color="white" space={15} size="lg" hover={false}>
                        {socials.map((social) => (
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
            </StyledHoverContent>
        </StyledTeamMember>
    );
};

TeamMember.propTypes = {
    title: PropTypes.string,
    designation: PropTypes.string,
    image: PropTypes.shape(ImageType),
    description: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
};

export default TeamMember;
