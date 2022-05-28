/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Image, Social, SocialLink, Button } from "gatsby-theme-ui";
import { ImageType, SocialType } from "@boseo/helper/types";
import {
    StyledAuthor,
    StyledThumb,
    StyledName,
    StyledRole,
    StyledBio,
} from "./style";

const BlogAuthor = ({ avatar, name, designation, bio, socials, path }) => (
    <StyledAuthor>
        {avatar?.src && (
            <StyledThumb>
                <Image src={avatar.src} alt={avatar?.alt || name} />
            </StyledThumb>
        )}
        {name && <StyledName>{name}</StyledName>}
        {designation && <StyledRole>{designation}</StyledRole>}
        {bio && <StyledBio>{bio}</StyledBio>}
        {socials && (
            <Social space={10} variant="contained" color="primary">
                {socials?.map((social) => (
                    <SocialLink
                        key={social.id}
                        label={social.title}
                        href={social.link}
                    >
                        <i className={social.icon} />
                    </SocialLink>
                ))}
            </Social>
        )}
        <Button sx={{ mt: "20px" }} size="sm" path={path}>
            View Profile
        </Button>
    </StyledAuthor>
);

BlogAuthor.propTypes = {
    avatar: PropTypes.shape(ImageType),
    name: PropTypes.string,
    designation: PropTypes.string,
    bio: PropTypes.string,
    path: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
};

export default BlogAuthor;
