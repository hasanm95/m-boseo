/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import {
    SectionTitleType,
    ButtonType,
    VideoButtonType,
    ImageType,
} from "@boseo/helper/types";
import { SectionTitle } from "gatsby-theme-component";
import { Button, VideoButton, Image } from "gatsby-theme-ui";
import { StyledSection, StyledBtnWrap } from "./style";

const AboutArea = ({ data }) => (
    <StyledSection className="about">
        <div className="container">
            <div className="row">
                {data?.images?.[0].src && (
                    <div className="col-lg-6" sx={{ mb: ["30px", null, 0] }}>
                        <Image
                            src={data?.images[0].src}
                            alt={data?.images[0].alt || "About"}
                        />
                    </div>
                )}
                <div className="col-xl-5 col-lg-6 offset-xl-1">
                    {data?.section_title && (
                        <SectionTitle
                            {...data.section_title}
                            descProps={{ pr: "30px" }}
                        />
                    )}

                    <StyledBtnWrap>
                        {data?.buttons?.map(
                            ({ id, path, content, ...rest }) => (
                                <Button
                                    key={id}
                                    path={path}
                                    sx={{
                                        px: [null, null, "37px"],
                                        mr: "30px",
                                    }}
                                    {...rest}
                                >
                                    {content}
                                </Button>
                            )
                        )}

                        {data?.video_button && (
                            <VideoButton
                                videoId={data?.video_button.video_id}
                                channel={data?.video_button?.video_platform}
                            >
                                {data?.video_button?.content}
                            </VideoButton>
                        )}
                    </StyledBtnWrap>
                </div>
            </div>
        </div>
    </StyledSection>
);

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        video_button: PropTypes.shape(VideoButtonType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default AboutArea;
