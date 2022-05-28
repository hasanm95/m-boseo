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
import { Image, Button, VideoButton } from "gatsby-theme-ui";
import { StyledSection, StyledBtnWrap } from "./style";

const AboutArea = ({ data }) => (
    <StyledSection className="about-area">
        <div className="container">
            <div className="row" sx={{ alignItems: "center" }}>
                {data?.images?.[0]?.src && (
                    <div className="col-lg-6">
                        <Image
                            src={data?.images[0].src}
                            alt={data?.images[0]?.alt || "About"}
                        />
                    </div>
                )}
                <div
                    className="col-lg-6"
                    sx={{
                        pl: ["15px", "30px", null, null, "85px"],
                        mt: ["36px", null, "21px"],
                    }}
                >
                    {data?.section_title && (
                        <SectionTitle
                            {...data.section_title}
                            descProps={{ pr: "30px" }}
                            titleStyle={2}
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
                                        mr: ["20px", "30px"],
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
