/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Social, SocialLink } from "gatsby-theme-ui";
import { TextType, ImageType, SocialType } from "@boseo/helper/types";
import WidgetBox from "../widget-box";
import Logo from "../logo";

const FooterTextWidget = ({ data }) => (
    <WidgetBox>
        {data?.logo && (
            <Logo
                mainLogo={data?.logo?.[0]}
                lightLogo={data?.logo?.[1]}
                sx={{ mb: ["24px", null, null, "43px"] }}
            />
        )}
        {data?.texts?.map((text) => (
            <p sx={{ mb: ["22px", null, null, "28px"] }} key={text.content}>
                {text.content}
            </p>
        ))}

        <Social variant="texted" space={18}>
            {data?.socials?.map((social) => (
                <SocialLink
                    key={social.id}
                    href={social.link}
                    label={social.title}
                >
                    <i className={social.icon} />
                </SocialLink>
            ))}
        </Social>
    </WidgetBox>
);

FooterTextWidget.propTypes = {
    data: PropTypes.shape({
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)).isRequired,
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    }),
};

export default FooterTextWidget;
