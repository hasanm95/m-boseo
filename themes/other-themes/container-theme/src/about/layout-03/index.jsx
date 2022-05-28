/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitle } from "gatsby-theme-component";
import { Accordion, VideoButton, Image } from "gatsby-theme-ui";
import {
    SectionTitleType,
    ItemType,
    VideoButtonType,
    ImageType,
} from "@boseo/helper/types";
import { StyledSection, StyledImage } from "./style";

const AboutArea = ({ data }) => (
    <StyledSection className="about-area">
        {data?.images?.[0]?.src && (
            <StyledImage>
                <Image
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "About"}
                />
            </StyledImage>
        )}
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-lg-7">
                    {data?.section_title && (
                        <SectionTitle
                            sx={{ mb: ["27px", null, "41px", "60px", "70px"] }}
                            {...data.section_title}
                        />
                    )}

                    <Accordion space="20px" items={data?.items} />

                    {data?.video_button && (
                        <VideoButton
                            videoId={data.video_button.video_id}
                            channel={data.video_button.video_platform}
                            sx={{ mt: ["15px", null, "25px", null, "35px"] }}
                        >
                            {data.video_button?.content}
                        </VideoButton>
                    )}
                </div>
            </div>
        </div>
    </StyledSection>
);

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        video_button: PropTypes.shape(VideoButtonType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default AboutArea;
