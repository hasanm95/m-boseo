/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import { Image } from "gatsby-theme-ui";
import { ImageType } from "@boseo/helper/types";
import { StyledThumb, StyledVideoBtn } from "./style";

const ModalVideo = loadable(() => import("gatsby-theme-ui"), {
    resolveComponent: (components) => components.ModalVideo,
});

const BlogVideo = ({ title, video_link, layout, image, showVideoBtn, sx }) => {
    const [isOpen, setIsOpen] = useState(false);
    let video_arr;
    let video_id;
    let video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        // eslint-disable-next-line prefer-destructuring
        video_id = video_arr[1];
        // eslint-disable-next-line prefer-destructuring
        video_channel = video_link.split(".")[1];
    }
    const onClickHandler = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <StyledThumb className="blog-video" layout={layout} sx={sx}>
            <Image src={image.src} alt={image?.alt || title} />
            {showVideoBtn && (
                <Fragment>
                    <StyledVideoBtn
                        onClick={onClickHandler}
                        aria-label="Click here to open video modal"
                    >
                        <i className="fa fa-play" />
                    </StyledVideoBtn>

                    <ModalVideo
                        channel={video_channel}
                        isOpen={isOpen}
                        videoId={video_id}
                        onClose={onClickHandler}
                    />
                </Fragment>
            )}
        </StyledThumb>
    );
};

BlogVideo.propTypes = {
    image: PropTypes.shape(ImageType),
    video_link: PropTypes.string,
    title: PropTypes.string,
    layout: PropTypes.oneOf([1, 2, 3]),
    showVideoBtn: PropTypes.bool,
    sx: PropTypes.shape({}),
};

export default BlogVideo;
